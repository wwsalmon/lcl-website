import {useState} from "react";
import {testimonials} from "../content/testimonials.json";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function LanderTestimonials({className}: {className?: string}){
    const [currIndex, setCurrIndex] = useState<number>(0);

    function changeIndex(increment:number){
        const newIndex = currIndex + increment;
        if (newIndex >= testimonials.length || newIndex < 0) return;
        setCurrIndex(newIndex);
    }

    return (
        <div className={className}>
            <div className="lcl-rounded-rect p-4">
                <div className="flex">
                    {testimonials[currIndex].headshots && testimonials[currIndex].headshots.map(x => (
                        <img src={x.headshot} alt={`Headshot of ${testimonials[currIndex].name}`} className="w-20 rounded-full mr-4"/>
                    ))}
                </div>
                <p className="font-bold text-xl my-4">
                    <span className="mr-2">{testimonials[currIndex].name}</span>
                    <span className="font-light">{testimonials[currIndex].class}</span>
                </p>
                <p className="leading-relaxed opacity-75 my-4">
                    {testimonials[currIndex].message}
                </p>
            </div>
            <div className="flex flex-wrap items-center">
                <button
                    onClick={() => changeIndex(-1)}
                    disabled={currIndex === 0}
                    className="w-12 h-12 mr-4 mt-4 flex justify-center items-center lcl-rounded-rect opacity-50 hover:opacity-100"
                >
                    <FaArrowLeft/>
                </button>
                <button
                    onClick={() => changeIndex(1)}
                    disabled={currIndex === testimonials.length - 1}
                    className="w-12 h-12 mr-4 mt-4 flex justify-center items-center lcl-rounded-rect opacity-50 hover:opacity-100"
                >
                    <FaArrowRight/>
                </button>
                <Link href="/about#testimonials">
                    <a className="h-12 px-4 ml-auto-xs my-4 lcl-button">Read all testimonials <span className="ml-2"><FaArrowRight/></span></a>
                </Link>
            </div>
        </div>
    )
}