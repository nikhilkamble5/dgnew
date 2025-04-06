
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import '../../pages/styles/Career.css';

const JobCard = ({ job }) => {
  return (
    <Card className="job-card">
      <CardContent className="job-card-content">
        <h3 className="job-title">{job.title}</h3>
        
        <div className="job-meta-details">
          <div className="job-meta-item">
            <MapPin className="job-meta-icon" />
            <span>{job.location}</span>
          </div>
          
          <div className="job-meta-item">
            <Briefcase className="job-meta-icon" />
            <span>{job.jobType}</span>
          </div>
          
          <div className="job-meta-item">
            <Clock className="job-meta-icon" />
            <span>{job.experience}</span>
          </div>
        </div>
        
        <p className="job-description">
          {job.description}
        </p>
        
        <div className="job-skills">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="job-skill-tag">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="job-skill-more">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="job-card-footer">
        <Link to={`/career/jobs/${job.id}`} className="job-action-link">
          <Button 
            variant="outline" 
            className="job-action-button"
          >
            View Details
          </Button>
        </Link>
        <Link to={job.applyLink} className="job-action-link">
          <Button className="job-action-button">
            Apply Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
