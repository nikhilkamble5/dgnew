import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        
        const blogRes = await fetch('/data/blogData.json');
        if (!blogRes.ok) {
          throw new Error('Failed to fetch blog data');
        }
        
        const blogs = await blogRes.json();
        const foundBlog = blogs.find((b) => b.id === parseInt(id));
        
        if (foundBlog) {
          setBlog(foundBlog);
          
          try {
            
            const htmlRes = await fetch(process.env.PUBLIC_URL + foundBlog.htmlpath);
            if (!htmlRes.ok) {
              throw new Error('Failed to fetch blog content');
            }
            
            const htmlContent = await htmlRes.text();
            setContent(htmlContent);
          } catch (contentError) {
            console.error('Error loading blog content:', contentError);
            
            setContent("<p>Blog content is currently unavailable. Please check back later.</p>");
            setError("Content unavailable");
          }
        } else {
          navigate('/blogs');
        }
      } catch (error) {
        console.error('Error loading blog:', error);
        setError("Failed to load blog");
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id, navigate]);

  if (loading) return <div className="loading">Loading blog...</div>;
  if (error && !blog) return <div className="error">Error: {error}</div>;

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="back-link-container" style={{ textAlign: 'center', margin: '20px 0' }}>
          <h3 className="back-heading" onClick={() => navigate('/blogs')} style={{ cursor: 'pointer', color: '#3498db' }}>
            &larr; Back to All Blogs
          </h3>
        </div>
        {blog && <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{blog.title}</h1>}
      </div>
      
      <main className="blog-main">
        {error ? (
          <div className="blog-error">
            <p>We're having trouble loading this blog content. Please try again later.</p>
          </div>
        ) : (
          <article
            className="blog-article"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </main>
    </div>
  );
};

export default BlogDetail;
