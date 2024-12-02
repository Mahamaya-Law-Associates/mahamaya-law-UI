'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik'; 
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'; // Use next/navigation in app directory

// Validation schema using Yup
const BlogSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Title must be at least 5 characters')
        .required('Title is required'),
    description: Yup.string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required'),
    image: Yup.string().required('An image is required'),
});

const BlogCreation = () => {
    const router = useRouter();
    const [previewImage, setPreviewImage] = useState(null);
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
        axios.get('http://localhost:4200/blog/getall')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.error('Error fetching blogs:', err);
            });
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: null,
        },
        validationSchema: BlogSchema,
        onSubmit: async (values) => {
            try {
                await axios.post('http://localhost:4200/blog/add', values, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success('Blog created successfully');
                formik.resetForm();
                setPreviewImage(null);
                fetchBlogs(); // Refetch blogs after new blog is created
            } catch (error) {
                console.error('Failed to create blog:', error);
                toast.error('Failed to create blog');
            }
        },
    });

    // Handle image upload and preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            toast.error('Please select an image file.');
            return;
        }

        const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
        if (!validFileTypes.includes(file.type)) {
            toast.error('Please select a valid image file (PNG, JPG, JPEG, or GIF).');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error('Image size should not exceed 5MB.');
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string
            setPreviewImage(reader.result);
            formik.setFieldValue('image', reader.result);
        }
        reader.onerror = error => {
            console.error("Error: ", error);
        }
    };

    // Handle blog deletion
    const deleteBlog = (id) => {
        axios.delete(`http://localhost:4200/blog/delete/${id}`, {
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
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md mb-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Create a Blog</h2>
                <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
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

                        {/* Description Input */}
                        <div className="mt-4">
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Blog Description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32"
                            />
                            {formik.touched.description && formik.errors.description ? (
                                <div className="text-red-500 text-sm">{formik.errors.description}</div>
                            ) : null}
                        </div>

                        {/* Image Upload Input */}
                        <div className="mt-6">
                            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
                                Upload Image
                            </label>
                            <input
                                id="image-upload"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="form-input w-full"
                            />
                            {formik.touched.image && formik.errors.image ? (
                                <div className="text-red-500 text-sm">{formik.errors.image}</div>
                            ) : null}

                            {previewImage && previewImage != null ? (
                                <div className="mt-4">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="w-full h-48 object-cover rounded-md border"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? 'Creating...' : 'Create Blog'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Blog Display Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-xl shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Existing Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.length === 0 ? (
                        <p>No blogs available.</p>
                    ) : (
                        blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="font-bold text-lg text-gray-900 mb-2">{blog.title}</h2>
                                    <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
                                    <button
                                        onClick={() => deleteBlog(blog._id)}
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogCreation;
