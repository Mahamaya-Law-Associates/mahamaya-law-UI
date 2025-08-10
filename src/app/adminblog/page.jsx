'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'; // Use next/navigation in app directory
import '../../styles/adminblogpost.css';
import Link from 'next/link';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// Validation schema using Yup
const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters')
    .required('Title is required'),
  description: Yup.string()
    .required('Description is required'),
  image: Yup.string()
    .required('Image less than 1MB is required')
});

const BlogCreation = ({ placeholder }) => {

  const editor = useRef(null);
  const [description, setDescription] = useState('');

  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || 'Start typing...'
  }),
    [placeholder]
  );

  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      router.push('/adminlogin'); // Redirect to login if no token
    } else {
      setToken(storedToken);
      fetchBlogs();
    }
  }, [router]);

  // Fetch all blogs
  const fetchBlogs = () => {
    axios.get('https://mahamaya-law.vercel.app/blog/getall')
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      });
  };

  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
      image: '',
      author: ''
    },
    validationSchema: BlogSchema,
    onSubmit: async (values) => {
      try {
        values.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        await axios.post('https://mahamaya-law.vercel.app/blog/add', values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success('Blog created successfully');
        formik.resetForm();
        if (fileInputRef.current) {
          fileInputRef.current.value = ''; // Clears selected file & filename
        }
        formik.setFieldValue('image', '');
        setDescription(''); // Reset description
        fetchBlogs(); // Refetch blogs after new blog is created
      } catch (error) {
        console.error('Failed to create blog:', error);
        toast.error('Failed to create blog');
      }
    },
  });

  // Handle blog deletion
  const [deleting, setDeleting] = useState(false);
  const deleteBlog = (id) => {
    setDeleting(true);
    axios.delete(`https://mahamaya-law.vercel.app/blog/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success('Blog deleted successfully');
        fetchBlogs(); // Refetch blogs after deletion
      })
      .catch((err) => {
        toast.error('Failed to delete blog');
        console.error(err);
      })
      .finally(() => {
        setDeleting(false);
      });
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    router.push('/adminlogin'); // Redirect to login page
    toast.success('Logged out successfully'); // Show success message
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Logout Button */}
      <div className="flex justify-end w-full mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Blog Creation Form */}
      <div className="w-10/12 space-y-8 p-10 bg-white rounded-xl shadow-md mb-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create a Blog</h2>
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          <div className="-space-y-px">
            {/* Title Input */}
            <div>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Blog Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="my-8">
              <JoditEditor
                className="my-8"
                id="description"
                name="description"
                type="text"
                ref={editor}
                value={description}
                config={config}
                tabIndex={1} // TabIndex Of Textarea
                onBlur={(newContent) => {
                  setDescription(newContent);
                  formik.setFieldValue('description', newContent);
                }} // preferred to use only this option to update the description for performance reasons
                onChange={(newContent) => {
                  formik.setFieldValue('description', newContent);
                }}
              />
              {description ? (
                <div className="text-red-500 text-sm">{formik.errors.description}</div>
              ) : null}
            </div>
          </div>

          {/* Image Upload */}
          {/* <div className="my-4">
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => convertToBase64(e)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0 file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div> */}

          <div className='flex flex-row justify-between items-center'>
            <div className='w-3/12'>
              <input
                ref={fileInputRef}
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  const maxSize = 1 * 1024 * 1024; // 1MB

                  if (!file) return;

                  if (file.size > maxSize) {
                    formik.setFieldError('image', 'Image must be under 1MB');
                    return;
                  }

                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    const base64Image = reader.result;
                    formik.setFieldValue('image', base64Image);
                    formik.setFieldError('image', null); // clear previous error
                  };
                }}

                onBlur={formik.handleBlur}
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0 file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 w-full px-3 py-2 border border-gray-300 placeholder-gray-500"
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.image}</div>
              ) : null}
            </div>

            {/* Author Input */}
            <div className='w-3/12'>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Blog Author"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
                className="appearance-none rounded block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.author && formik.errors.author ? (
                <div className="text-red-500 text-sm">{formik.errors.author}</div>
              ) : null}
            </div>

            {/* Date */}
            <div className='w-3/12'>
              <div className="text-sm text-gray-700" id="date" name="date" value={formik.values.date}>
                Date: {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>



          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="group relative w-1/4 h-12 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>

      {/* Blog Display Section */}
      <div className="min-w-10/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Existing Blogs</h2>
        {deleting && (
          <div className="text-center text-red-600 text-md font-medium animate-pulse mb-4">
            Deleting the blog, please wait...
          </div>
        )}
        {!deleting && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            {blogs.length === 0 ? (
              <p>No blogs available.</p>
            ) : (
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* <div className="relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </div> */}
                  <div className="p-4">
                    <h2 className="text-lg text-gray-900 mb-2 line-clamp-3 min-h-24">{blog.title}</h2>
                    <hr />
                    {/* <p className="text-gray-700 text-sm mb-4 line-clamp-6 overflow-hidden" dangerouslySetInnerHTML={{ __html: blog.description }} ></p> */}
                    <div className='flex justify-between items-center mt-4'>

                      <button
                        onClick={() => deleteBlog(blog._id)}
                        className="border border-black text-black px-3 py-2 hover:bg-slate-600 hover:text-white"
                      >
                        Delete
                      </button>

                      <Link href={`/blogs/${blog._id}`}>
                        <button
                          className="border border-black text-black px-3 py-2 hover:bg-slate-600 hover:text-white"
                        >
                          View Blog ⟶
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCreation;
