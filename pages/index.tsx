import TwoCol from "../components/twocol";
import LanderGrid from "../components/lander-grid";
export default function Home() {
    return (
        <>
            <div className="w-full lcl-grad-1 py-8">
                <TwoCol label="logo">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:pr-10">
                            <p className="text-3xl font-light leading-snug">Life Changing Labs is the startup accelerator and mentorship program for the <b>top 5% of university entrepreneurs worldwide.</b></p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <img src="/img/lander1.jpg" alt="Screenshot from LCL session"/>
                        </div>
                    </div>
                </TwoCol>
                <div className="lcl-container mt-12">
                    <hr/>
                </div>
            </div>
            <div className="w-full lcl-grad-2 py-8">
                <TwoCol label="logo">
                    <p className="text-2xl mb-8">LCL was founded at Cornell University in 2012. Since then, we've empowered over 80 startups, which have raised $20+ million and impact 500,000+ people.</p>
                    <LanderGrid/>
                </TwoCol>
                <div className="lcl-container mt-12">
                    <hr/>
                </div>
            </div>
            <div className="w-full lcl-bg-red py-8">
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
        </>
    )
}