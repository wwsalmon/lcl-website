import Link from "next/link";

export default function LanderCTA(){
    return (
        <div className="w-full lcl-grad-3">
            <div className="text-center lcl-container py-1">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto my-12">
                    <img src="/logo-new-color.svg" className="w-12" alt="LCL Logo"/>
                </div>
                <h2 className="font-light text-4xl leading-tight">
                    Every student with a big idea deserves <br className="hidden md:block"/>
                    a platform <span className="font-bold">as bold as their vision.</span>
                </h2>
                <p className="text-xl opacity-75 my-6">Apply to the Summer ‘21 session of Life Changing Labs’ accelerator today.</p>
                <Link href="/apply">
                    <a className="uppercase font-bold text-xl lcl-bg-light-yellow p-4 inline-block text-black">
                        Apply to Summer '21
                    </a>
                </Link>
                <hr className="mt-12"/>
            </div>
        </div>
    )
}