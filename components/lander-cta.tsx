import Link from "next/link";
import TwoCol from "./twocol";
import LanderTestimonials from "./lander-testimonials";

export default function LanderCTA(){
    return (
        <>
            <div className="w-full lcl-bg-gray">
                <TwoCol label="logo" className="py-12">
                    <h2 className="lcl-bold-uppercase mb-8">Hear from our founders</h2>
                    <LanderTestimonials/>
                </TwoCol>
            </div>
            <div className="w-full lcl-grad-3">
                <div className="text-center lcl-container py-1">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto my-12">
                        <img src="/logo-new-color.svg" className="w-12" alt="LCL Logo"/>
                    </div>
                    <h2 className="font-light text-4xl leading-tight my-8">
                        Every student with a big idea deserves <br className="hidden md:block"/>
                        a platform <span className="font-bold">as bold as their vision.</span>
                    </h2>
                    <p className="sm:text-xl opacity-75">Apply to the Summer ‘21 session of Life Changing Labs’ accelerator today.</p>
                    <div>
                        <Link href="/apply#faqs">
                            <a className="underline opacity-50 hover:opacity-100 sm:text-xl">
                                Not ready yet? Read answers to some frequently asked questions
                            </a>
                        </Link>
                    </div>
                    <div className="my-8">
                        <Link href="/apply">
                            <a className="uppercase font-bold text-xl lcl-bg-light-yellow p-4 inline-block text-black">
                                Apply to Summer '21
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}