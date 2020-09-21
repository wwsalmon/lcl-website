import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

export default function LanderGrid(){
    const data = [{
        name: "Maidbot",
        logo: "/img/companies/maidbot.png",
        label: <>Raised over <span className="font-bold lcl-yellow">$5M+ in funding</span> and has 20 employees</>,
    }, {
        name: "EverSound",
        logo: "/img/companies/eversound.png",
        label: <>Raised over <span className="font-bold lcl-yellow">$10M+ in funding</span> and has 500+ customers</>,
    }, {
        name: "Response",
        logo: "/img/companies/response.png",
        label: <>Graduate of <span className="font-bold lcl-light-yellow">Y Combinator</span></>,
    }, {
        name: "Empower Equity",
        logo: "/img/companies/empeq.png",
        label: <>Procured financing budget of <span className="font-bold lcl-yellow">over $2 billion</span></>,
    }, {
        name: "Invictus BCI",
        logo: "/img/companies/invictus.png",
        label: <>Recipient of <span className="font-bold lcl-light-yellow">Cornell Tech Startup Award</span></>,
    }];

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {data.map((c, i) => (
                <div className="lcl-rounded-rect flex items-center" key={i}>
                    <img className="h-24 rounded-l-lg" src={c.logo} alt={`${c.name} logo`}/>
                    <div className="px-4">
                        <h3 className="font-bold">{c.name}</h3>
                        <p className="font-light leading-tight">{c.label}</p>
                    </div>
                </div>
            ))}
            <Link href="/companies">
                <a className="lcl-rounded-rect flex items-center justify-center opacity-50 hover:opacity-100 font-bold h-24">
                    See all companies <span className="ml-2"><FaArrowRight/></span>
                </a>
            </Link>
        </div>
    )
}