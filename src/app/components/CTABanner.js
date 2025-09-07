'use client'
import React from "react";
import Link from "next/link";

export default function AddBanner() {
    return (
        <section
            className="relative py-20 w-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/bg/bg4.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">
                        Stop Stressing, Start Scoring!
                    </h3>

                    <p className="text-white/80 max-w-xl mx-auto text-[15px]">
                        Balancing deadlines and exams? Let us take care of the writing so you can focus on what matters most.
                    </p>

                    <div className="relative mt-8">
                        <Link
                            href=""
                            className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md"
                        >
                            Get Assignment Help
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
