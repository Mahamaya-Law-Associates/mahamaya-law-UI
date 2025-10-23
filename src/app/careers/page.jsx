// export default function Careers() {
//     return (
//         <main className="px-6 py-12 bg-gray-50 text-gray-800">
//             {/* Hero Section */}
//             <section className="bg-gray-800 text-white rounded-lg p-10 text-center mb-12 shadow-lg">
//                 <h1 className="text-4xl font-bold mb-3">Careers at Mahamaya Law</h1>
//                 <p className="text-lg">Join a team committed to justice, integrity, and legal excellence.</p>
//             </section>

//             {/* Why Work With Us */}
//             <section className="max-w-4xl mx-auto mb-16">
//                 <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
//                 <ul className="list-disc list-inside space-y-2 text-gray-700">
//                     <li><strong>Meaningful Work:</strong> Impact lives through justice and legal service.</li>
//                     <li><strong>Career Growth:</strong> Continuous development and mentoring opportunities.</li>
//                     <li><strong>Ethical Culture:</strong> Integrity and transparency at the core of our practice.</li>
//                 </ul>
//             </section>

//             {/* Job Openings */}
//             <div className="flex flex-row flex-wrap">
//                 <section className="max-w-4xl mx-auto">
//                     <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>

//                     {/* Job 1 */}
//                     <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-2">Associate Attorney</h3>
//                         <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> Lucknow, Uttar Pradesh • On-Site</p>
//                         <p className="mb-4">Seeking a licensed attorney with 2+ years of litigation experience. Strong writing and courtroom skills required.</p>
//                         <a href="mailto:careers@yourlawfirm.com" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                             Apply Now
//                         </a>
//                     </div>

//                     {/* Job 2 */}
//                     <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-2">Legal Assistant</h3>
//                         <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> New Delhi • On-Site</p>
//                         <p className="mb-4">Support attorneys with document preparation, research, and communication. Legal experience preferred.</p>
//                         <a href="mailto:careers@yourlawfirm.com" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                             Apply Now
//                         </a>
//                     </div>

//                     {/* Job 2 */}
//                     <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-2">Legal Assistant 2</h3>
//                         <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> New Delhi • On-Site</p>
//                         <p className="mb-4">Support attorneys with document preparation, research, and communication. Legal experience preferred.</p>
//                         <a href="mailto:careers@yourlawfirm.com" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                             Apply Now
//                         </a>
//                     </div>

//                     {/* Job 2 */}
//                     <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
//                         <h3 className="text-xl font-semibold mb-2">Legal Assistant 3</h3>
//                         <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> New Delhi • On-Site</p>
//                         <p className="mb-4">Support attorneys with document preparation, research, and communication. Legal experience preferred.</p>
//                         <a href="mailto:careers@yourlawfirm.com" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                             Apply Now
//                         </a>
//                     </div>
//                 </section>

//                 {/* Application Form */}
//                 <section className="max-h-fit xl:w-3/12 w-5/12 lg:max-w-5xl max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
//                     <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>
//                     <hr />

//                     <form
//                         action="https://formsubmit.co/saurabhsadhwaniofficial@gmail.com"
//                         method="POST"
//                         encType="multipart/form-data"
//                         className="space-y-5"
//                     >
//                         {/* Hidden Fields */}
//                         <input type="hidden" name="_subject" value="New Job Application" />
//                         <input type="hidden" name="_captcha" value="false" />

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Full Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 required
//                                 className="w-full border border-gray-300 rounded px-4 py-2"
//                                 placeholder="Jane Doe"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 required
//                                 className="w-full border border-gray-300 rounded px-4 py-2"
//                                 placeholder="you@example.com"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Position Applying For</label>
//                             <input
//                                 type="text"
//                                 name="position"
//                                 required
//                                 className="w-full border border-gray-300 rounded px-4 py-2"
//                                 placeholder="e.g., Associate Attorney"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Cover Letter</label>
//                             <textarea
//                                 name="message"
//                                 rows="4"
//                                 required
//                                 className="w-full border border-gray-300 rounded px-4 py-2"
//                                 placeholder="Tell us why you're a good fit..."
//                             ></textarea>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium mb-1">Resume Link</label>
//                             <input
//                                 type="link"
//                                 name="link"
//                                 className="w-full border border-gray-300 rounded px-4 py-2"
//                                 placeholder="Link to your resume (Google drive, Onedrive etc.)"
//                                 required
//                             />
//                         </div>

//                         {/* <div>
//                             <label className="block text-sm font-medium mb-1">Upload Resume</label>
//                             <input
//                                 type="file"
//                                 name="attachment"
//                                 accept=".pdf,.doc,.docx"
//                                 className="w-full"
//                                 required
//                             />
//                         </div> */}

//                         <button
//                             type="submit"
//                             className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//                         >
//                             Submit Application
//                         </button>
//                     </form>
//                 </section>
//             </div>
//         </main>
//     );
// }


export default function Careers() {
    return (
        <main className="px-6 py-12 bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-800 text-white rounded-lg p-10 text-center mb-12 shadow-lg">
                <h1 className="text-4xl font-bold mb-3">Careers at Mahamaya Law</h1>
                <p className="text-lg">Join a team committed to justice, integrity, and legal excellence.</p>
            </section>

            {/* Why Work With Us */}
            <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Meaningful Work:</strong> Impact lives through justice and legal service.</li>
                    <li><strong>Career Growth:</strong> Continuous development and mentoring opportunities.</li>
                    <li><strong>Ethical Culture:</strong> Integrity and transparency at the core of our practice.</li>
                </ul>
            </section>
            {/* Hero */}
            <section className="text-center mb-12">
                {/* <h1 className="text-4xl font-bold text-teal-700 mb-2">CAREERS</h1> */}
                <p className="text-xl text-gray-600 font-light">LET’S GROW TOGETHER</p>
            </section>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                
                {/* Left Column – Job and Internship Info */}
                <div className="space-y-6">
                    {/* Job Opportunities */}
                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-2">Job Opportunities</h3>
                        <p className="text-gray-700 mb-2">
                            At Mahamaya Law, we look forward to hiring suitable candidates. Interested applicants are requested to submit their resumes by email at:
                        </p>
                        <p className="text-blue-700 font-medium">
                            <a href="mailto:Info@mahamayalaw.in">Info@mahamayalaw.in</a>
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            We will get in touch with you as soon as any suitable opportunity is available.
                        </p>
                    </div>

                    {/* Internship Opportunities */}
                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-2">Internship Openings</h3>
                        <p className="text-gray-700 mb-2">
                            Students from law schools/universities interested in interning with us can write to:
                        </p>
                        <p className="text-blue-700 font-medium">
                            <a href="mailto:Info@mahamayalaw.in">Info@mahamayalaw.in</a>
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            We will get in touch with you as soon as any suitable opportunity is available.
                        </p>
                    </div>
                </div>

                {/* Right Column – Application Form */}
                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-8">
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Apply Now:</h3>
                    
                    <form
                        action="https://formsubmit.co/saurabhsadhwaniofficial@gmail.com"
                        method="POST"
                        encType="multipart/form-data"
                        className="space-y-4"
                    >
                        {/* Hidden Fields */}
                        <input type="hidden" name="_subject" value="New Career Application" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <label className="block text-sm font-medium mb-1">Job Type</label>
                            <select name="job_type" required defaultValue={"Job Opportunity"} className="w-full border border-gray-300 rounded px-4 py-2">
                                <option value="">Select</option>
                                <option value="Job Opportunity">Job Opportunity</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Address</label>
                            <textarea
                                name="address"
                                rows={2}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Qualification</label>
                            <input
                                type="text"
                                name="qualification"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Current Designation</label>
                            <input
                                type="text"
                                name="designation"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Current Employer</label>
                            <input
                                type="text"
                                name="employer"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Upload Resume</label>
                            <input
                                type="file"
                                name="attachment"
                                accept=".pdf,.doc,.docx"
                                className="w-full"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
