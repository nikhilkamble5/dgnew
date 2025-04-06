
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import '../styles/blog.css';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogData.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="loading">Loading blogs...</div>;

  return (
    <div className="all-blogs-page">
      <h1>All Blogs</h1>
      <div className="all-blogs-container">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="blog-card-wrapper"
            >
              <BlogCard 
                imgSrc={blog.imgSrc}
                title={blog.title}
                id={blog.id}
              />
            </div>
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;