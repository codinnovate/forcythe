import '../app/globals.css';
import { layersIcon } from "@/assets";
import Image from "next/image";

export default function Card({ title, desc }: { title: string, desc: string }) {
    return (
        <div
            className="w-full p-8 bg-blu-900 rounded-2xl flex flex-col gap-[2em] "
        >
            <div className="w-[46px] rounded-md flex items-center justify-center h-[46px] bg-[#60A6E799]">
                <Image
                    src={layersIcon}
                    alt="stacks"
                    width={30}
                    height={30}
                />
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h3 className="text-grey text-lg">{desc}</h3>
        </div>
        
    );
}
