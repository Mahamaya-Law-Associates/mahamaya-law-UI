'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = () => {
        axios.get('http://mahamaya-law.vercel.app/blog/getall')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const displayBlog = () => {
        if (blogs.length === 0) {
            return (
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
                    <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
                        <h2 className="text-2xl font-semibold mb-2">No Blogs Available</h2>
                        <p className="text-lg">Check back later for insights and updates from our team!</p>
                    </div>
                </div>
            );
        } else {
            return (
                <section className="relative w-full bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col justify-center items-center text-center mb-8">
                            <div className="text-sm font-medium text-gray-500 mb-4">
                                <span className="text-gray-400">Home</span>
                                <span className="mx-2"> &gt; </span>
                                <span className="text-blue-500">Blogs</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blogs</h1>
                            <p className="text-lg text-gray-600">
                                Insights and updates from our experts
                            </p>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Blog Image */}
                                    <div className="relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-6">
                                        <h2 className="font-bold text-lg text-gray-900 mb-2">
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4">
                                            {blog.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
    };

    return <div>{displayBlog()}</div>;
};

export default Blog;
