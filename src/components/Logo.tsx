import { logoImage } from "@/assets";
import Image from "next/image";

export default function Logo(){
    return (
        <Image 
        src={logoImage} 
        
        alt="Forcythe"
        />
    )
}