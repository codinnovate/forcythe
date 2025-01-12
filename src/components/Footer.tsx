import Link from "next/link";
import { navItems } from "./Header";
import Logo from "./Logo";

export default function Footer(){
    <footer className="flex flex-col md:flex-row">
        {/* <Subscription/> */}
        <div className="">
            <Logo />
            <h1 className="text-grey">
            We are the growth company for businesses looking to scale. 
            We are dedicated to transforming businesses with bespoke digital solutions that drive growth.
            </h1>
        </div>

        <div className="">
            <h1>
                Company
            </h1>
            <div className="">
            {navItems.map((nav, i) => (
                <Link
                className="text-blu-100" 
                key={i}
                href={nav.href}>
                    {nav.label}
                </Link>
            ))}
            </div>
        </div>

    </footer>
}