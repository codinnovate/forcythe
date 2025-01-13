import { logoImage } from "@/assets";
import Image from "next/image";

export default function Logo(){
    return (
        <Image 
        src={logoImage} 
        width={112}
        height={24.8}
        alt="Forcythe"
        />
    )
}