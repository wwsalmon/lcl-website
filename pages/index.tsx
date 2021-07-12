import TwoCol from "../components/twocol";
import LanderGrid from "../components/lander-grid";
import LanderCTA from "../components/lander-cta";
import {speakers, mentors} from "../content/people.json";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import SEOBlock from "../components/seo-block";

export default function Home() {
    return (
        <>
            <SEOBlock/>
            <div className="w-full lcl-grad-1 py-4">
                <TwoCol label="logo" className="py-8 border-b">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:pr-10">
                            <h1 className="font-light leading-snug" style={{fontSize: "1.7rem"}}>Life Changing Labs is the startup accelerator and mentorship program for the <b>top 5% of university entrepreneurs worldwide</b>.<hr className="invisible my-3"/>For 0% equity.</h1>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <img src="/img/lander1.jpg" alt="Screenshot from LCL session"/>
                        </div>
                    </div>
                </TwoCol>
            {/* </div> */}
            <div className="w-full py-4">
                <TwoCol label="">
                    <h2 className="lcl-bold-uppercase">Our impact</h2>
                </TwoCol>
                <TwoCol label="logo" className="pt-6 pb-8 border-b">
                    <p className="text-xl mb-6">LCL was founded at Cornell University in 2012. Since then, we've empowered <span className="font-bold lcl-yellow">over 80 startups,</span> which have raised <span className="font-bold lcl-pink">$20+ million</span> and <span className="font-bold lcl-light-yellow">impact 500,000+ people.</span></p>
                    <LanderGrid/>
                </TwoCol>
            </div>
            <div className="w-full pt-4 pb-8">
                <TwoCol label="logo">
                    <h2 className="text-xl mb-12">Meet the people who are invested in your success.</h2>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">Mentors</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {mentors.map((x, i) => (
                            <div className="lcl-rounded-rect p-4 flex items-center" key={i}>
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#mentors">
                            <a className="lcl-button h-32">
                                See all mentors <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                </TwoCol>
            </div>
            </div>
            <div className="w-full lcl-bg-blue py-8">
                <TwoCol label="">
                    <h3 className="lcl-bold-uppercase mb-8">Speakers</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {speakers.map((x, i) => (
                            <div className="lcl-rounded-rect p-4 flex items-center" key={i}>
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#speakers">
                            <a className="lcl-button h-32">
                                See all speakers <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                </TwoCol>
            </div>
            <LanderCTA/>
        </>
    )
}