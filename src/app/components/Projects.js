'use client'
import React,{useState} from "react";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../../node_modules/react-18-image-lightbox/style.css';
import Image from "next/image";

const images = [
    "/images/works/1.jpg",
    "/images/works/2.jpg",
    "/images/works/3.jpg",
    "/images/works/4.jpg",
    "/images/works/5.jpg",
    "/images/works/6.jpg",
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    return(
        <>
           <section className="relative md:py-24 py-16" id="project">
                <div className="container">
                    {/* Section Heading */}
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                            Our Work & Examples
                        </h3>
                        <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                            Explore a selection of our academic writing and support services, 
                            crafted with precision, originality, and professionalism.
                        </p>
                    </div>

                    {/* Grid of 6 services */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {/* 1 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/Essay.png" alt="Essay Writing"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Essay Writing</h5>
                                <span className="block text-sm text-slate-400">Structured & Original Essays</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/Dissertation.png" alt="Dissertation Assistance"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Dissertation Assistance</h5>
                                <span className="block text-sm text-slate-400">From Proposals to Full Drafts</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/thesis.png" alt="Thesis Support"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Thesis Support</h5>
                                <span className="block text-sm text-slate-400">Expert Writing & Formatting</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/Proofreading.png" alt="Proofreading & Editing"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Proofreading & Editing</h5>
                                <span className="block text-sm text-slate-400">Polished & Error-Free Work</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/presentation.png" alt="Presentations & Posters"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Presentations & Posters</h5>
                                <span className="block text-sm text-slate-400">Academic Visuals that Impress</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/Assignment.png" alt="Assignments & Reports"/>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <h5 className="text-white font-semibold">Assignments & Reports</h5>
                                <span className="block text-sm text-slate-400">Customized Academic Solutions</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link href="/works/survey1.pdf" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox">
                                    <Unicons.UilFile width={16}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </>
    )
}
