'use client';

import { cameraman, planDesign, planDevelop, planLaunch } from "@/assets"; // Import images
import { cn } from "@/lib/utils"; // Utility for conditional classnames
import Image from "next/image"; // Image component from Next.js
import { useState } from "react";
import Button from "./Button";

export default function Sportlightslide() {
    const [activeTab, setActiveTab] = useState(0); // State to track the active tab

    const tabs = [
        { 
            title: 'Idea', 
            content: {
                title: "Your vision is unique",
                desc: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's us shape it.",
                image: cameraman
            }
        },
        { 
            title: 'Design', 
            content: {
                title: "Crafting the blueprint for success",
                desc: "Design is more than aesthetics, it's about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
                image: planDesign
            }   
        },
        { 
            title: 'Develop',
            content: {
                title: "Turning blueprints into reality",
                desc: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
                image: planDevelop
            }
        },
        { 
            title: 'Launch',
            content: {
                title: "Your launchpad to the market",
                desc: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
                image: planLaunch
            }
        }
    ];

    return (
        <section className="flex flex-col gap-5">
            {/* Tab buttons */}
            <div className="w-full border-2 border-blu-200 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5 md:max-w-[50%]">
                {tabs.map((tab, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveTab(index)} // Set active tab on click
                        className={cn(
                            "px-2 md:px-2.5 py-3 md:py-3.5 delay-300 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300",
                            activeTab === index ? 'text-black' : 'text-white', // Active tab styling
                            activeTab === index ? 'bg-blu-200' : 'bg-transparent' // Active tab background color
                        )}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-col md:flex-row md:max-w-[50%]">
                {/* Text Content */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                        {tabs[activeTab].content.title} {/* Display active tab's title */}
                    </h1>
                    <h3 className="text-grey text-base md:text-lg mb-8 leading-7">
                        {tabs[activeTab].content.desc} {/* Display active tab's description */}
                    </h3>
                    <Button 
                     title="Book a call"
                     />
                </div>

                {/* Image Content */}
            </div>
                <div className="flex justify-center mt-[3em]  md:absolute left-[60%] md:-mt-[3em] md:p-[2em]">
                    <Image 
                        src={tabs[activeTab].content.image} // Display active tab's image
                        alt={tabs[activeTab].content.title} // Alt text for the image
                        loading="lazy"
                        className="transition-all duration-700 delay-75"
                    />
                </div>
        </section>
    );
}
