
import React from 'react';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';
import { Input } from "./input";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import '../../pages/styles/Career.css';

const JobFilters = ({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedJobType,
  setSelectedJobType,
  selectedExperience,
  setSelectedExperience,
  locationOptions,
  resetFilters
}) => {
  return (
    <div className="job-filters">
      <div className="filters-layout">
        {/* Search Input */}
        <div className="search-container">
          <Search className="search-icon" />
          <Input
            placeholder="Search by job title, skill, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        {/* Location Filter */}
        <div className="filter-dropdown">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="filter-trigger">
              <div className="filter-label">
                <MapPin className="filter-icon" />
                <SelectValue placeholder="Location" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_locations">All Locations</SelectItem>
              {locationOptions.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Job Type Filter */}
        <div className="filter-dropdown">
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger className="filter-trigger">
              <div className="filter-label">
                <Briefcase className="filter-icon" />
                <SelectValue placeholder="Job Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_types">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Experience Level Filter */}
        <div className="filter-dropdown">
          <Select value={selectedExperience} onValueChange={setSelectedExperience}>
            <SelectTrigger className="filter-trigger">
              <div className="filter-label">
                <Filter className="filter-icon" />
                <SelectValue placeholder="Experience" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_experience">All Experience</SelectItem>
              <SelectItem value="0-1 Years">0-1 Years</SelectItem>
              <SelectItem value="1-3 Years">1-3 Years</SelectItem>
              <SelectItem value="3-5 Years">3-5 Years</SelectItem>
              <SelectItem value="5+ Years">5+ Years</SelectItem>
              <SelectItem value="Entry-level">Entry-level</SelectItem>
              <SelectItem value="Mid-level">Mid-level</SelectItem>
              <SelectItem value="Senior">Senior</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Reset Filters Button */}
        <Button variant="outline" onClick={resetFilters} className="reset-button">
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilters;
