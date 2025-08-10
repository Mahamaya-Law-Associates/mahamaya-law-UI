// 'use client';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

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

//     const displayBlog = () => {
//         if (blogs.length === 0) {
//             return (

//                 <div className="flex justify-center items-center min-h-screen bg-gray-100">
//                     {!loading ? (
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
//                 <section className="relative w-full bg-gray-100 pt-12 pb-40">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex flex-col justify-center items-center text-center mb-8">
//                             <div className="text-sm font-medium text-gray-500 mb-4">
//                                 <span className="text-gray-400">Home</span>
//                                 <span className="mx-2"> &gt; </span>
//                                 <span className="text-blue-500">Blogs</span>
//                             </div>
//                             <h1 className="text-4xl font-bold text-gray-800 mb-4">Blogs</h1>
//                             <p className="text-lg text-gray-600">
//                                 Insights and updates from our experts
//                             </p>
//                         </div>
//                     </div>

//                     {/* Blog Grid */}
//                     <div className="container mx-auto p-4">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {blogs.map((blog) => (
//                                 <div
//                                     key={blog._id}
//                                     className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-40"
//                                 >

//                                     <div className="p-4">
//                                         <h2 className="text-lg text-gray-900 mb-2 line-clamp-3 min-h-24">{blog.title}</h2>
//                                         <hr />
//                                         {/* <p className="text-gray-700 text-sm mb-4 line-clamp-6 overflow-hidden" dangerouslySetInnerHTML={{ __html: blog.description }} ></p> */}
//                                         <div className='flex justify-between items-center mt-4'>

//                                             <div></div>
//                                             <Link href={`/blogs/${blog._id}`}>
//                                                 <button
//                                                     className="border border-black text-black px-3 py-2 hover:bg-slate-600 hover:text-white"
//                                                 >
//                                                     View Blog ⟶
//                                                 </button>
//                                             </Link>

//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             );
//         }
//     };

//     return (
//         <div>
//             {displayBlog()}
//         </div>
//     );
// };




'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [search, setSearch] = useState('');
  const [author, setAuthor] = useState('');
  const [sortOrder, setSortOrder] = useState('new');

  useEffect(() => {
    axios
      .get('https://mahamaya-law.vercel.app/blog/getall')
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Helper to parse date string like "August 10, 2025"
  const parseDate = (dateStr) => {
    return new Date(dateStr);
  };

  // Filter and sort blogs
  const filteredBlogs = blogs
    .filter(blog =>
      (!search || blog.title.toLowerCase().includes(search.toLowerCase()) || blog.description?.toLowerCase().includes(search.toLowerCase())) &&
      (!author || blog.author?.toLowerCase().includes(author.toLowerCase()))
    )
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === 'new' ? dateB - dateA : dateA - dateB;
    });

  return (
    <section className="bg-gray-50 min-h-screen pt-12 pb-20">
      {/* Header + Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-400">Home</span>
          <span className="mx-2"> &gt; </span>
          <span className="text-blue-500">Blogs</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">Blogs</h1>
        <p className="text-lg text-gray-600 mb-6">
          Insights and updates from our experts
        </p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-md"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {/* <select className="w-full px-4 py-2 border rounded-md text-gray-500">
            <option>Practice Area</option>
            <option>Litigation</option>
            <option>IPR</option>
            <option>Corporate</option>
          </select> */}
          <input
            type="text"
            placeholder="Author"
            className="w-full px-4 py-2 border rounded-md"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 border rounded-md text-gray-500"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="new">Sort: New to Old</option>
            <option value="old">Sort: Old to New</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px] text-gray-600 text-lg">
          Loading blogs...
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px] text-gray-600 text-lg">
          No blogs available.
        </div>
      ) : (
        // Blog Cards
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400 text-sm">
                {blog.image ? (
                  <img
                    src={blog.image.startsWith('data:image') ? blog.image : `data:image/jpeg;base64,${blog.image}`}
                    alt={blog.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">
                    {/* {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })} */}
                  {blog.date}
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2 min-h-[60px]">
                  {blog.title}
                </h2>
                <div className="text-right">
                  <Link href={`/blogs/${blog._id}`}>
                    <button className="text-blue-600 hover:underline font-medium text-sm">
                      View Blog →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
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
//                                 <Image style={{display: 'inline'}} width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/bulleted-list.png" alt="bulleted-list"/>

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
