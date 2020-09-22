import TwoCol from "../components/twocol";
import LanderGrid from "../components/lander-grid";
import LanderCTA from "../components/lander-cta";
import Accordion from "react-robust-accordion";
import {application} from "../content/faq.json";
import {speakers, mentors} from "../content/people.json";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="w-full lcl-grad-1 py-8">
                <TwoCol label="logo" className="py-8 border-b">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:pr-10">
                            <h1 className="font-light leading-snug" style={{fontSize: "1.7rem"}}>Life Changing Labs is the startup accelerator and mentorship program for the <b>top 5% of university entrepreneurs worldwide.</b></h1>
                            <div className="my-6">
                                <Link href="/apply"><a className="opacity-75 hover:opacity-100 border-b">Apply for summer '21 session</a></Link><br/>
                                <Link href="#faqs"><a className="opacity-75 hover:opacity-100 border-b">Application FAQs</a></Link><br/>
                                <Link href="#howitworks"><a className="opacity-75 hover:opacity-100 border-b">How the program works</a></Link><br/>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <img src="/img/lander1.jpg" alt="Screenshot from LCL session"/>
                            <p className="my-6 opacity-75">Not in university yet? Start your entrepreneurial journey with <a href="https://lifechangingschool.org" className="opacity-75 hover:opacity-100 border-b">Life Changing School.</a></p>
                        </div>
                    </div>
                </TwoCol>
            </div>
            <div className="w-full lcl-grad-2 py-8">
                <TwoCol label="">
                    <h2 className="lcl-bold-uppercase">Our impact</h2>
                </TwoCol>
                <TwoCol label="logo" mobileLabel={true} className="pt-8 pb-16 border-b">
                    <p className="text-xl mb-12">LCL was founded at Cornell University in 2012. Since then, we've empowered <span className="font-bold lcl-yellow">over 80 startups,</span> which have raised <span className="font-bold lcl-pink">$20+ million</span> and <span className="font-bold lcl-light-yellow">impact 500,000+ people.</span></p>
                    <LanderGrid/>
                </TwoCol>
            </div>
            <div className="w-full lcl-bg-red py-8" id="howitworks">
                <TwoCol label="" className="mb-8">
                    <h2 className="lcl-bold-uppercase">How it works</h2>
                </TwoCol>
                <TwoCol label="logo" className="pb-16">
                    <p className="text-xl">Each year, we select top founders for an 8-week boot camp, where we give them the skills, resources, and community they will need to accelerate their startups to match their vision.
                    <br/><br/>
                    Each summer culminates with a Demo Day, where the startups present their companies to a select panel of judges — venture capitalists, angel investors, and prominent entrepreneurs.
                    <br/><br/>
                        Demo Day is just the beginning of a lifetime membership with LCL. Accelerator graduates get an automatic invite to join Life Changing Network and lifetime access to StartupTree platform.
                    </p>
                </TwoCol>
            </div>
            <div className="w-full lcl-bg-gray py-8">
                <TwoCol label="logo">
                    <h2 className="text-xl mb-12">Meet the people who are invested in your success.</h2>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">Mentors</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {mentors.map(x => (
                            <div className="lcl-rounded-rect p-4 flex items-center">
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#mentors">
                            <a className="lcl-rounded-rect flex items-center justify-center opacity-25 hover:opacity-100 font-bold h-32">
                                See all mentors <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">Speakers</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {speakers.map(x => (
                            <div className="lcl-rounded-rect p-4 flex items-center">
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#speakers">
                            <a className="lcl-rounded-rect flex items-center justify-center opacity-25 hover:opacity-100 font-bold h-32">
                                See all speakers <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                </TwoCol>
            </div>
            <LanderCTA/>
            <div className="w-full lcl-bg-red py-12" id="faqs">
                <TwoCol label="logo">
                    <h2 className="mb-12 text-xl">Frequently asked questions:</h2>
                    <h3 className="lcl-bold-uppercase mb-8">Application</h3>
                    {application.map(q => (
                        <div className="lcl-faq">
                            <Accordion label={(
                                <div className="lcl-faq-q lcl-white-rect p-4">{q.question}</div>
                            )}>
                                <div className="lcl-faq-a lcl-white-rect p-4 opacity-75">{q.answer}</div>
                            </Accordion>
                        </div>
                    ))}
                </TwoCol>
            </div>
        </>
    )
}