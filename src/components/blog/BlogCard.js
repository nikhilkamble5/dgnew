
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = ({ imgSrc, title, id }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
      <img 
  src={`${process.env.PUBLIC_URL}/${imgSrc}`}
  alt={title}
  loading="lazy"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = `${process.env.PUBLIC_URL}/fallback-image.png`;
  }}
/>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <Link to={`/blog/${id}`} className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BlogCard;
