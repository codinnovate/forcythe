import { play, playWhite } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Button({title, className}:{title:string, className?:string}){
    return (
        <div className={cn(
            "relative transition-all w-fit group",
             className
            )}>
        <button 
        className={`transition-all duration-300 border-dotted border-white w-fit 
            py-[12px] px-5 flex gap-2 items-center justify-center 
            rounded-full bg-white text-black text-base relative 
            z-10 font-semibold group-hover:bg-[#064386] 
            group-hover:text-white text-center 
            whitespace-nowrap cursor-pointer hover:shadow-md`}>
            {title}
            <Image 
            alt="normal"
            src={play} 
            className="group-hover:hidden" 
            />
            <Image
            src={playWhite}
            alt="white icon"
            className="hidden group-hover:block"
            />
        </button>
        <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]">

        </div>
            </div>
    )
}