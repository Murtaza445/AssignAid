'use client'
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'

export default function GetInTouch(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comments: ""
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        try {
            await fetch("https://v1.nocodeapi.com/murtazatest/google_sheets/lYXArtlomZMRfDuw?tabId=Sheet1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([
                    [date, time, formData.name, formData.email, formData.subject, formData.comments]
                ])
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                comments: ""
            });

            setSuccessMessage("✅ Message sent successfully!");
            setTimeout(() => setSuccessMessage(""), 10000); // Hide after 10 seconds
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("❌ Something went wrong. Please try again.");
            setTimeout(() => setSuccessMessage(""), 10000);
        } finally {
            setLoading(false);
        }
    };

    return(
        <section className="relative md:py-24 py-16 dark:bg-slate-800" id="contact">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Have questions? Get in touch today and start your journey to academic success.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                <div className="lg:col-span-8">
                    <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form onSubmit={handleSubmit}>
                            <div className="grid lg:grid-cols-12 lg:gap-5">
                                <div className="lg:col-span-6 mb-5">
                                    <input 
                                        name="name" 
                                        id="name" 
                                        type="text" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Name :" 
                                        required
                                    />
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <input 
                                        name="email" 
                                        id="email" 
                                        type="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Email :" 
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <input 
                                        name="subject" 
                                        id="subject" 
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Subject :" 
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <textarea 
                                        name="comments" 
                                        id="comments" 
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Message :" 
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                id="submit" 
                                name="send" 
                                disabled={loading}
                                className={`btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center`}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Success / Error message */}
                        {successMessage && (
                            <p className="mt-4 text-center text-green-500 dark:text-green-400">
                                {successMessage}
                            </p>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="lg:ms-8">
                        <div className="flex">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                <Link href="tel:+12813039588" className="text-slate-400 text-[15px]">+1 (281) 303-9588</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                <Link href="mailto:info.assignaid@gmail.com" className="text-slate-400 text-[15px]">info.assignaid@gmail.com</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                <p className="text-slate-400 text-[15px] mb-2">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
