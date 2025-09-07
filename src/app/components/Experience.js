'use client'
import React from "react";
import Image from "next/image";
export default function Experience(){
    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Our Experience</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">At <span className="font-semibold">AssignAid</span>, experience meets excellence. 
                        For over a decade, we&apos;ve been helping students worldwide achieve academic success 
                        with professional writing, research, and presentation services.</p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                        
                        <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <Image src="/images/logos/facebook-logo-2019.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/>
                                    <h5 className="my-2 font-semibold text-lg">Facebook</h5>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">7+ Years of Expertise</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">A decade of proven experience delivering essays, research papers, and academic projects across all major disciplines.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start md:ms-8 relative md:order-2">
                                    <Image src="/images/logos/google-logo.png" className="rounded-full h-9 w-9 md:me-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/>
                                    <h5 className="my-2 font-semibold text-lg">Google Tech.</h5>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold">Global Reach</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">Trusted by students across the USA, UK, Canada, Australia, and many more countries worldwide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <Image src="/images/logos/lenovo-logo.png" className="rounded-full h-9 w-9 md:ms-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/>
                                    <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">100+ Projects Completed</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">From essays to dissertations, we&apos;ve successfully completed hundreds of academic projects with excellence.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start md:ms-8 relative md:order-2">
                                    <Image src="/images/logos/circle-logo.png" className="rounded-full h-9 w-9 md:me-auto" alt="" height={0} width={0} sizes="100vw" style={{with:"100%", height:"auto"}}/>
                                    <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold">Long-Term Student Partnerships</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">Students return to us for consistent quality, reliability, and academic support they can count on.</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}