import Link from "next/link";
import {FaBars, FaCaretDown} from "react-icons/fa";
import {useEffect, useState} from "react";
import {items} from "../content/navbar.json";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {

    }, []);

    return (
        <div className="w-full bg-white sticky top-0 z-10">
            <div className="flex lcl-container h-24 items-center">
                <div className="pr-4 lg:w-23 flex-shrink-0">
                    <Link href="/"><a><img src="/logo-original.svg" className="relative h-8 z-20" alt="LCL Logo"/></a></Link>
                </div>
                <div className="flex-grow h-full">
                    <div className="flex text-black items-center h-full">
                        <Link href="/"><a className="logo-header">LIFE CHANGING LABS</a></Link>
                        <div className={`flex items-center ml-auto lcl-navbar-menu h-full z-10 ${menuOpen ? "selected" : ""}`}>
                            {items.map(d => d.subitems.length > 0 ? (
                                <div className="text-center lcl-navbar-dropdown-outer md:h-full md:flex items-center relative">
                                    <Link href={d.link} key={d.link}><a className="mr-4">{d.label} <span className="hidden md:inline"><FaCaretDown/></span></a></Link>
                                    {/* <div className="md:absolute md:bg-gray-100 md:p-4 md:-ml-4 md:h-full flex items-center lcl-navbar-dropdown z-0">
                                        {d.subitems.map(s => (
                                            <Link href={s.link} key={s.link}><a className="mr-4">{s.label}</a></Link>
                                        ))}
                                    </div> */}
                                </div>
                            ) : (
                                <Link href={d.link} key={d.link}><a className="mr-4">{d.label}</a></Link>
                            ))}
                            {items.some(d => d.subitems.length > 0) ? (
                                <style dangerouslySetInnerHTML={{__html: `
                                    @media (min-width: 768px) {
                                        .lcl-navbar-dropdown{
                                            top: 0;
                                            opacity: 0;
                                            transition: all 0.2s ease;
                                        }
                                        
                                        .lcl-navbar-dropdown-outer:hover > .lcl-navbar-dropdown{
                                            opacity: 1.0;
                                            top: 4rem;
                                        }
                                    }
                                `}}/>
                            ) : ""}
                        </div>
                        <Link href="/apply"><a className="mr-4 ml-auto md:mr-0 md:ml-0 z-20 font-bold lcl-blue">Apply</a></Link>
                        <button className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}><FaBars/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}