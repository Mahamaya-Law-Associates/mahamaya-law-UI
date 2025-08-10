'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const BlogDetails = () => {
  const params = useParams();
  const router = useRouter();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogDetails = (id) => {
    setLoading(true);
    axios
      .get(`https://mahamaya-law.vercel.app/blog/getbyid/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const fetchBlogs = () => {
    axios
      .get('https://mahamaya-law.vercel.app/blog/getall')
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRandomBlogs = () => {
    // Exclude the current blog
    const filteredBlogs = blogs.filter((otherBlog) => otherBlog._id !== blogId);

    // Shuffle the filtered blogs
    for (let i = filteredBlogs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredBlogs[i], filteredBlogs[j]] = [filteredBlogs[j], filteredBlogs[i]];
    }

    // Return the first 3 random blogs
    return filteredBlogs.slice(0, 3);
  };

  const processBlogContent = (content) => {
    // console.log(content)
    // Use a regular expression to find all main headings (e.g., <h1>)
    // content = content.replace(/<h3/g, '<br/><h2').replace(/<\/h3>/g, '</h2>').replace('<br/><h2 class="MsoNormal"', '<h2 class="MsoNormal"').replace('font-size: 15px;', 'font-size: 20px;');
    // console.log(content);
    return content;
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogDetails(blogId);
    }
  }, [blogId]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
          <h2 className="text-2xl font-semibold mb-2">Loading</h2>
          <p className="text-lg">Fetching blog details...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white border border-red-300 text-red-800 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Blog Not Found</h2>
          <p className="text-lg">The blog you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const randomBlogs = getRandomBlogs();

  return (
    <div className="bg-gray-50 pb-24 px-16">
      <div className="mx-auto flex items-start justify-around py-20">
        <div className="rounded-lg w-11/12 lg:w-7/12">
          {/* Blog Header Section bg-[#002B5B] */}
          <div className="bg-slate-800 text-gray-50 rounded-md overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 mb-10">
            <div className="flex-1">
              <p className="text-sm font-light mb-2">
                Posted On - {blog.date || "Unknown Date"} &nbsp;•&nbsp; By - {blog.author || "Mahamaya Law"}
              </p>
              <h1 className="text-3xl font-bold leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {blog.title}
              </h1>
            </div>
            {blog.image && (
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <img
                  src={blog.image.startsWith('data:image') ? blog.image : `data:image/jpeg;base64,${blog.image}`}
                  alt="Blog Visual"
                  className="w-72 h-44 object-cover rounded-md border border-white shadow"
                />
              </div>
            )}
          </div>

          {/* <div className="text-3xl font-bold mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>{blog.title}</div> */}
          <hr className="mb-10" />
          <div
            className="text-gray-700 text-lg"
            dangerouslySetInnerHTML={{ __html: processBlogContent(blog.description) }}
          ></div>
        </div>
        <div className='bg-white p-4 md:w-3/12 w-0  hidden lg:block' style={{ backgroundColor: "white", border: "0.5px solid #aeaaaa" }}>
          <h2 className="text-xl font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>Other blogs</h2>
          <hr className="my-3" />
          <div className="flex flex-col gap-4">
            {randomBlogs.map((otherBlog, index) => (
              <div key={otherBlog._id} className="px-4 py-2">
                <h4 className="text-base font-mono">{otherBlog.title}</h4>
                <div className='flex items-end justify-end mt-2'>
                  <button
                    onClick={() => {
                      if (otherBlog._id !== blogId) {
                        router.push(`/blogs/${otherBlog._id}`);
                        fetchBlogDetails(otherBlog._id); // Fetch new blog details without refreshing
                      }
                    }}
                    className="text-blue-500"
                  >
                    ...read more
                  </button>
                </div>
                {index < randomBlogs.length - 1 && <hr className="mt-2" />} {/* Show <hr> only if it's not the last blog */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;