'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = () => {
        axios.get('https://mahamaya-law.vercel.app/blog/getall')
            .then((res) => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const displayBlog = () => {
        if (blogs.length === 0) {
            return (

                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    {!loading ? (
                        <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
                            <h2 className="text-2xl font-semibold mb-2">No Blogs Available</h2>
                            <p className="text-lg">Check back later for insights and updates from our team!</p>
                        </div>
                    ) : (
                        <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
                            <h2 className="text-2xl font-semibold mb-2">Loading</h2>
                            <p className="text-lg">Getting all the latest blogs just for you ...</p>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <section className="relative w-full bg-gray-100 pt-12 pb-40">
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
                                    key={blog._id}
                                    className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                >
                                    {/* <div className="relative">
                  <img
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

                                            <button
                                                onClick={() => viewBlog(blog._id)}
                                                className="border border-black text-black px-3 py-2 hover:bg-slate-600 hover:text-white"
                                            >
                                                View Blog ⟶
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
    };

    return (
        <div>
            {displayBlog()}
        </div>
    );
};


// const Blog = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchBlogs = () => {
//         axios.get('https://mahamaya-law.vercel.app/blog/getall')
//             .then((res) => {
//                 setBlogs(res.data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchBlogs();
//     }, []);


//     const [editorContent, setEditorContent] = useState("");
//     const [font, setFont] = useState("Arial");

//     // Update the editor content and preview
//     const updatePreview = () => {
//         return editorContent
//             .replace(/\n/g, "<br>") // Handle line breaks
//             .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold formatting (using **)
//             .replace(/\<i\>(.*?)\<\/i\>/g, "<em>$1</em>") // Italic formatting (using <i>)
//             .replace(/^\• (.*)$/gm, (match) => {
//                 // Convert list items (lines starting with '&bull; ')
//                 return `<ul><li>${match.slice(2)}</li></ul>`;
//             });
//     };

//     // Handle changes in the textarea
//     const handleEditorChange = (e) => {
//         setEditorContent(e.target.value);
//     };

//     // Handle the bold button
//     const handleBold = () => {
//         const selectionStart = document.getElementById("editor").selectionStart;
//         const selectionEnd = document.getElementById("editor").selectionEnd;
//         const selection = editorContent.substring(selectionStart, selectionEnd);

//         const newText = selection ? `**${selection}**` : "**bold text** ";
//         const updatedText = editorContent.slice(0, selectionStart) + newText + editorContent.slice(selectionEnd);
//         setEditorContent(updatedText);

//         setTimeout(() => {
//             const newCaretPosition = selectionStart + newText.length;
//             document.getElementById("editor").setSelectionRange(newCaretPosition, newCaretPosition);
//         }, 0);
//     };

//     const handleItalic = () => {
//         const selection = editorContent.substring(
//             document.getElementById("editor").selectionStart,
//             document.getElementById("editor").selectionEnd
//         );
//         const newText = selection ? `<em>${selection}</em>` : "<em>italic text</em> ";
//         const updatedText = editorContent.replace(selection, newText);
//         setEditorContent(updatedText);
//     };

//     // Handle the list button
//     const handleList = () => {
//         const selection = editorContent.substring(
//             document.getElementById("editor").selectionStart,
//             document.getElementById("editor").selectionEnd
//         );
//         const newText = selection ? `&bull; ${selection}` : "&bull; New list item \n";
//         const updatedText = editorContent.replace(selection, newText);
//         setEditorContent(updatedText);
//     };

//     // Handle font change
//     const handleFontChange = (e) => {
//         setFont(e.target.value);
//     };

//     const displayBlog = () => {
//         if (blogs.length === 0) {
//             return (

//                 <div className="flex justify-center items-center min-h-screen bg-gray-100">
//                     { !loading ? ( 
//                         <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
//                             <h2 className="text-2xl font-semibold mb-2">No Blogs Available</h2>
//                             <p className="text-lg">Check back later for insights and updates from our team!</p>
//                         </div>
//                     ) : (
//                         <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
//                             <h2 className="text-2xl font-semibold mb-2">Loading</h2>
//                             <p className="text-lg">Getting all the latest blogs just for you ...</p>
//                         </div>
//                     )}
//                 </div>  
//             );
//         } else {
//             return (
//                 <div>
//                     <div className="card border rounded-xl border-slate-300 w-1/2 my-8">
//                         <h1 className='text-xl p-2'>Create a new Blog Post</h1>
//                         <hr />
//                         <div className="toolbar pt-3 px-5">
//                             <button className='px-2 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:bg-gray-300' onClick={handleBold}>
//                                 <strong>B</strong>
//                             </button>
//                             <span className="mx-2 text-gray-300">|</span>
//                             <button className='px-2 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:bg-gray-300' onClick={handleItalic}>
//                                 <i>I</i>
//                             </button>
//                             <span className="mx-2 text-gray-300">|</span>
//                             <button className='px-2 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:bg-gray-300' onClick={handleList}>
//                                 <img style={{display: 'inline'}} width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/bulleted-list.png" alt="bulleted-list"/>

//                             </button>
//                             <span className="mx-2 text-gray-300">|</span>
//                             <select className='px-2 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:bg-gray-300' onChange={handleFontChange} value={font}>
//                                 <option value="Arial">Arial</option>
//                                 <option value="Courier New">Courier New</option>
//                                 <option value="Georgia">Georgia</option>
//                                 <option value="Times New Roman">Times New Roman</option>
//                                 <option value="Verdana">Verdana</option>
//                                 <option value="Cormorant Garamond">Cormorant Garamond</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="textarea flex m-auto">
//                         <textarea
//                             id="editor"
//                             placeholder="Start typing here..."
//                             value={editorContent}
//                             onChange={handleEditorChange}
//                             style={{ fontFamily: font }}
//                             width="35%"
//                         />
//                         <div className="preview-text w-full h-full">
//                             <h2 className='text-lg'>Preview:</h2>
//                             <div
//                                 id="preview"
//                                 dangerouslySetInnerHTML={{ __html: updatePreview() }}
//                                 style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#f9f9f9", minHeight: "150px", width: "100%" }}
//                             />
//                         </div>

//                     </div>

//                 </div>
//             );
//         }
//     };

//     return (
//         <div>
//             {displayBlog()} 
//             <Footer />
//         </div>
//     );

// }


export default Blog;
