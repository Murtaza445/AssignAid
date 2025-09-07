'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import Image from "next/image";

export default function HeroOne(){
    const [currentImage, setCurrentImage] = useState("/images/hero/hero1.png");

    useEffect(() => {
        const images = ["/images/hero/hero1.png", "/images/hero/hero2.png"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentImage(images[index]);
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return(
        <>
           <section className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5" id="home">
            <div className="absolute inset-0" id="overlay"></div>
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 className="font-bold text-amber-500 lg:text-[50px] text-3xl lg:leading-normal leading-normal mb-0">AssignAid<br/> </h4>
                        <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Your Academic Partner <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Essay Writing',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Dissertation Help',
                                1000,
                                'Thesis Assistance',
                                1000,
                                'Presentation Support',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typewrite text-amber-500"
                            repeat={Infinity}
                        />
                        <span className="typewrite text-amber-500" data-period="2000" data-type='[ "Essay Writing", "Dissertation Help", "Thesis Assistance", "Presentation Support" ]'> <span className="wrap"></span> </span></h4>
                        <p className="text-slate-400 max-w-xl"> From essays to dissertations, thesis to presentations – we simplify academic writing so you can focus on learning. Professional, reliable, and tailored solutions for every student.</p>
                    
                        <div className="mt-6">
                            <Link href="#contact" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Get Help Now</Link>
                            <Link href="#calculator" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1">Request a Free Quote</Link>
                        </div>
                    </div>

                    <div className="relative">
                        <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}}  src={currentImage} alt=""/>

                        <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target="125"> <CountUp
                                            start={7}
                                            className="counter-value"
                                            end={180}
                                            duration={2.75} /></span>+</span>
                            <h6 className="text-sm text-slate-400 mt-1">Assignments Delivered</h6>
                        </div>

                        <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <h6 className="font-semibold">Expert Writers</h6>
                            <h6 className="text-sm text-slate-400 mt-1">7+ Years Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                <Link href="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>
        </div>
        </>
    )
} 