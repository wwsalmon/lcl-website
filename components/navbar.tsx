import Link from "next/link";
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";
import {items} from "../content/navbar.json";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {

    }, []);

    return (
        <div className="w-full bg-white sticky top-0">
            <div className="flex lcl-container h-16 items-center">
                <div className="pr-4 lg:w-24 flex-shrink-0">
                    <Link href="/"><a><img src="/logo-new-color.svg" className="relative h-8 z-20" alt="LCL Logo"/></a></Link>
                </div>
                <div className="flex-grow">
                    <div className="flex text-black items-center">
                        <Link href="/"><a className="font-black text-xs leading-none z-20">Life <br/>Changing <br/>Labs </a></Link>
                        <div className={`flex items-center ml-auto lcl-navbar-menu z-10 ${menuOpen ? "selected" : ""}`}>
                            {items.map(d => (
                                <Link href={d.link} key={d.link}><a className="mr-4">{d.label}</a></Link>
                            ))}
                        </div>
                        <Link href="/apply"><a className="mr-4 ml-auto md:mr-0 md:ml-0 z-20 font-bold lcl-blue">Apply</a></Link>
                        <button className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}><FaBars/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}