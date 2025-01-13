import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/constants";

export default function Footer(){
    return (
        <footer className="flex flex-col gap-10">
        <div className="grid grid-cols-3">
        {/* <Subscription/> */}
        <div className="flex gap-5 flex-col">
            <Logo />
            <h1 className="text-grey">
            We are the growth company for businesses looking to scale. 
            We are dedicated to transforming businesses with bespoke digital solutions that drive growth.
            </h1>
        </div>

        <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">
                Company
            </h1>
            <div className="flex flex-col gap-4">
            {navItems.map((nav, i) => (
                <Link
                className="text-blu-200 font-bold" 
                key={i}
                href={nav.href}>
                    {nav.label}
                </Link>
            ))}
            </div>
        </div>

            
        </div>
        <div className="border-t border-blu-100 mb-5">
        <p className="text-blu-200 text-sm mt-5  ">Copyright © 2024 Forcythe. All rights reserved.</p>
        </div>
    </footer>
    )
}