import {years} from "../content/companies.json";
import TwoCol from "../components/twocol";
import SEOBlock from "../components/seo-block";
import LanderCTA from "../components/lander-cta";

export default function Companies() {
    return (
        <>
            <SEOBlock title="Companies"/>
            <div className="w-full lcl-grad-3-sideways py-1">
                <TwoCol label="">
                    <h1 className="text-4xl font-light mb-8 mt-16">Companies</h1>
                    <hr/>
                    <div className="sm:flex my-8">
                        <div>
                            <p className="font-black text-4xl">80+</p>
                            <p className="lcl-bold-uppercase">Startups launched</p>
                        </div>
                        <div className="sm:ml-16 mt-4 sm:mt-0">
                            <p className="font-black text-4xl">$20m+</p>
                            <p className="lcl-bold-uppercase">Funding raised</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="my-8">
                        <span>Jump to: {years.map((year, i) => (
                            <>
                                <a href={`#${year.year}`} className="border-b">{year.year}</a>
                                {i < years.length - 1 && " / "}
                            </>
                        ))}</span>
                    </div>
                </TwoCol>
            </div>
            <div className="my-12">
                {years.map(year => (
                   <TwoCol label={year.year} className="my-12 pb-12 border-b" id={year.year} key={year.year}>
                       <div className="grid sm:grid-cols-2 gap-8">
                           {year.companies.map(x => (
                               <div className="flex">
                                   <img src={x.logo} alt={`Logo of ${x.name}`} className="w-16 h-16 mr-4"/>
                                   <div>
                                       <h3 className="font-bold text-xl mb-2">{x.name} {x.place && (
                                           <span className="font-light">({x.place})</span>
                                       )}</h3>
                                       <p className="opacity-50 text-sm">{x.descript}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </TwoCol>
                ))}
            </div>
            <LanderCTA/>
        </>
    )
}