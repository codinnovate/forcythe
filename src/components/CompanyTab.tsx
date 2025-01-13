'use client';

import { BeauLogo, christina, edwin, execProCeo, executivePro, iwariFounder, iwariLogo, john,  stackAiLogo, starksLogo } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const tabsItems = [
  { id: 0,
    title: "Starks Associate", 
    logo:starksLogo,
    company:{
        testimony:'Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally',
        person:'John, Management',
        personProfile:john,
    }
    },
  { id: 1,
    title: "ExecutivePros",
    logo:executivePro,
    company:{
        testimony:'The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!',
        person:'Testimony, Co-founder',
        personProfile:execProCeo,
    }

    },
  { id: 2, 
    title: "Stac AI", 
    logo:stackAiLogo,
    company:{
         testimony:'Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.',
         person:'Edwin, Former CTO',
         personProfile:edwin,
    }
  },
  { 
    id: 3, 
    title: "Iwari",
    logo:iwariLogo,
    company:{
        testimony:'The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.',
        person:'Iwaria, Founder',
        personProfile:iwariFounder,
    }
    },
    { 
    id: 4,
    title: "Beaupreneur", 
    logo:BeauLogo,
    company:{
            testimony:'I`m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.',
            person:'Christiana, Founder',
            personProfile:christina,
    }
},
];

export default function SlidingTab() {
  const tabRef = useRef<HTMLDivElement | null>(null);
  const [tabWidth, setTabWidth] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const updateWidth = useCallback(() => {
    if (tabRef.current) {
      const parentWidth = tabRef.current.getBoundingClientRect().width;
      const numberOfTabs = tabsItems.length;
      const newTabWidth = parentWidth / numberOfTabs;
      if (newTabWidth !== tabWidth) {
        setTabWidth(newTabWidth);
      }
    }
  }, [tabWidth]);

  useEffect(() => {
    const currentTabRef = tabRef.current;
    const resizeObserver = new ResizeObserver(updateWidth);
    if (currentTabRef) {
      resizeObserver.observe(currentTabRef);
    }

    return () => {
      if (currentTabRef) {
        resizeObserver.unobserve(currentTabRef);
      }
    };
  }, [updateWidth]);

  return (
    <>
      {/* Tab Buttons */}
      <div
        ref={tabRef}
        className="w-full grid grid-cols-5 min-w-[750px] relative border p-5 border-[#06438C] rounded-full justify-between items-center"
      >
        {tabsItems.map((tab) => (
          <button
            key={tab.id}
            style={{ width: tabWidth }}
            className={cn(
              "z-40 w-fit h-fit flex items-center justify-center",
              currentTab === tab.id && "text-secondary"
            )}
            onClick={() => setCurrentTab(tab.id)}
          >
           <Image 
           src={tab.logo} 
           height={30}
           alt="" 
           />
          </button>
        ))}
        {/* Tab highlight bar */}
        <div
          className={cn(
            "absolute top-1 bottom-1 left-1 right-1 transition-all inset-0 duration-300 delay-300 bg-blu-600",
            currentTab === 0 && "rounded-s-full",
            currentTab === 4 && "rounded-e-full"
          )}
          style={{
            width: tabWidth,
            transform: `translateX(${currentTab * tabWidth}px)`,
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="relative flex  w-full p-5 mt-5">
        {tabsItems.map((tab, index) => (
          <div
            key={tab.id}
            className={cn(
              "flex-col md:flex-row  transition-all ease-linear duration-150 delay-100 gap-5 px-5 w-full md:w-[70%] rounded-[2em] bg-blu-600",
              currentTab === index ? 'flex' : 'hidden'
            )}
            >
            <div className="flex flex-row">
                <div className="">
                <h2 className="font-semibold text-white  py-4">
                  {tab.title}
                </h2>
                <h3>
                {tab.company.testimony}
                </h3>
                <h2 className="font-semibold text-white  py-4">
                  {tab.company.person}
                </h2>
                </div>
            </div>
            <div className="py-5 min-w-[180px]">
            <Image 
            src={tab.company.personProfile}
            alt={tab.title}
            loading="lazy"
            className="w-full md:w-[180px] min-h-[300px] max-h-[347px] object-cover rounded-xl"
             />
            
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
