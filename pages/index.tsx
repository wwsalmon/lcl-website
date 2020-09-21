import TwoCol from "../components/twocol";
import LanderGrid from "../components/lander-grid";
import LanderCTA from "../components/lander-cta";
import Accordion from "react-robust-accordion";
import {application} from "../content/faq.json";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="w-full lcl-grad-1 py-8">
                <TwoCol label="logo">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:pr-10">
                            <p className="text-3xl font-light leading-snug">Life Changing Labs is the startup accelerator and mentorship program for the <b>top 5% of university entrepreneurs worldwide.</b></p>
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
                <div className="lcl-container mt-12">
                    <hr/>
                </div>
            </div>
            <div className="w-full lcl-grad-2 py-8">
                <TwoCol label="logo" mobileLabel={true}>
                    <p className="text-2xl mb-8">LCL was founded at Cornell University in 2012. Since then, we've empowered over 80 startups, which have raised $20+ million and impact 500,000+ people.</p>
                    <LanderGrid/>
                </TwoCol>
                <div className="lcl-container mt-12">
                    <hr/>
                </div>
            </div>
            <div className="w-full lcl-bg-red py-8" id="howitworks">
                <TwoCol label="" className="mb-8">
                    <h2 className="lcl-bold-uppercase">How it works</h2>
                </TwoCol>
                <TwoCol label="logo">
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
                    <h2 className="text-xl">Meet the people who are invested in your success.</h2>
                </TwoCol>
            </div>
            <LanderCTA/>
            <div className="w-full lcl-bg-red py-12" id="faqs">
                <TwoCol label="" className="mb-8">
                    <h3 className="lcl-bold-uppercase">Application</h3>
                </TwoCol>
                <TwoCol label="logo">
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