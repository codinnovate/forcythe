import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";



export const navItems = [
    { label: "About", href: "/" },
    { label: "Services", href: "/#" },
    { label: "Portfolio", href: "/#" },
    { label: "Studio", href: "/#" },
    { label: "Foundation", href: "/#" },
];


export default function Header(){
    return (
        <header className="flex justify-between p-5">
        <Logo />
        <nav className="hidden md:flex gap-5">
            {navItems.map((nav, i) => (
                <Link 
                key={i}
                href={nav.href}>
                    {nav.label}
                </Link>
            ))}
        </nav>

        <button className="md:hidden flex items-center gap-4">
            Menu
        </button>
        <Button
        title="Book a Call"
        />
        </header>
    )
}