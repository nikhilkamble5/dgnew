
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "./button";
import { Briefcase, MapPin, Clock, Bookmark, BookmarkCheck } from "lucide-react";
import SimilarJobs from './SimilarJobs';
import jobsData from '../../data/jobsData';
import '../../pages/styles/Career.css';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  
  // State for bookmarked jobs
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const saved = localStorage.getItem('bookmarkedJobs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const jobId = parseInt(id, 10);
    const foundJob = jobsData.find(job => job.id === jobId);
    
    if (foundJob) {
      setJob(foundJob);
      // Scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [id]);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) => {
      const isBookmarked = prev.includes(jobId);
      let newBookmarks;
      
      if (isBookmarked) {
        newBookmarks = prev.filter(id => id !== jobId);
      } else {
        newBookmarks = [...prev, jobId];
      }
      
      // Save to localStorage
      localStorage.setItem('bookmarkedJobs', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  if (!job) {
    return (
      <div className="job-detail-loading">
        <div className="container">
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  const isBookmarked = bookmarkedJobs.includes(job.id);

  return (
    <div className="job-detail-page">
      <div className="container mx-auto px-4 py-8">
        <div className="job-detail-container">
          <div className="job-detail-header">
            <div className="flex items-center justify-between">
              <h1 className="job-detail-title">{job.title}</h1>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => toggleBookmark(job.id)}
                title={isBookmarked ? "Remove bookmark" : "Bookmark this job"}
                className="bookmark-button"
              >
                {isBookmarked ? (
                  <BookmarkCheck className="bookmark-icon bookmarked" />
                ) : (
                  <Bookmark className="bookmark-icon" />
                )}
              </Button>
            </div>
            
            <div className="job-meta">
              <div className="meta-item">
                <MapPin className="meta-icon" />
                <span>{job.location}</span>
              </div>
              <div className="meta-item">
                <Briefcase className="meta-icon" />
                <span>{job.jobType}</span>
              </div>
              <div className="meta-item">
                <Clock className="meta-icon" />
                <span>{job.experience}</span>
              </div>
            </div>
            
            {job.postedDate && (
              <p className="job-posted-date">
                Posted on {new Date(job.postedDate).toLocaleDateString()}
              </p>
            )}
          </div>
          
          <div className="job-detail-body">
            <h2 className="detail-section-heading">Job Description</h2>
            <p className="detail-text">{job.description}</p>
            
            {job.responsibilities && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Responsibilities</h2>
                <ul className="detail-list">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.requirements && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Requirements</h2>
                <ul className="detail-list">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="detail-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.education && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Education</h2>
                <p className="detail-text">{job.education}</p>
              </div>
            )}
            
            {job.shift && (
              <div className="detail-section">
                <h2 className="detail-section-heading">Work Shifts</h2>
                <div className="job-shifts">
                  {job.shift.map((shift, index) => (
                    <span key={index} className="job-shift-tag">
                      {shift}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="detail-section">
              <h2 className="detail-section-heading">Required Skills</h2>
              <div className="job-skills-container">
                {job.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="job-skill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="job-actions">
              <Button 
                className="apply-button" 
                onClick={() => window.location.href = job.applyLink}
                size="lg"
              >
                Apply Now
              </Button>
              <Link to="/career">
                <Button 
                  variant="outline" 
                  className="back-button"
                  size="lg"
                >
                  Back to Job Listings
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="similar-jobs-section">
            <h2 className="similar-jobs-heading">Similar Jobs</h2>
            <SimilarJobs 
              currentJobId={job.id} 
              jobType={job.jobType}
              skills={job.skills}
              category={job.category}
              allJobs={jobsData}
              onViewDetails={(job) => window.location.href = `/career/jobs/${job.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
