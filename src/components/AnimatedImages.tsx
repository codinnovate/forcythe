import { activity, afrifund, execPro, stacAi, starks } from "@/assets";
import Image from "next/image";

const images = [
    {src: afrifund, company: "AfricaFund"},
    {src: starks, company: "AfricaFund"},
    {src: activity, company: "AfricaFund"},
    {src: stacAi, company: "AfricaFund"},
    {src: execPro, company: "AfricaFund"},
    {src: afrifund, company: "AfricaFund"},
    {src: starks, company: "AfricaFund"},
    {src: stacAi, company: "AfricaFund"},
    {src: activity, company: "AfricaFund"},
    {src: execPro, company: "AfricaFund"},
    {src: afrifund, company: "AfricaFund"},
    {src: starks, company: "AfricaFund"},
    {src: stacAi, company: "AfricaFund"},
    {src: activity, company: "AfricaFund"},
    {src: execPro, company: "AfricaFund"},
    {src: afrifund, company: "AfricaFund"},
];

export default function AnimatedImages() {
    return (
        <div className="flex flex-col gap-[2em]">
            {/* normal */}
            <div className="animate-loop-scroll flex  gap-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-auto h-[340px] flex-shrink-0"
                    >
                        <Image
                            src={image.src}
                            alt={image.company}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* reverse */}
            <div className="animate-loop-scroll-reverse flex  gap-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-auto h-[340px] flex-shrink-0"
                    >
                        <Image
                            src={image.src}
                            alt={image.company}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
