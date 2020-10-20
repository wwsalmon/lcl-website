import TwoCol from "../components/twocol";
import SEOBlock from "../components/seo-block";
import {accelerator, application} from "../content/faq.json";
import {sections} from "../content/pages/apply.json";
import Accordion from "react-robust-accordion";
import LanderCTA from "../components/lander-cta";
import ReactMarkdown from "react-markdown";

export default function Apply(){
    return (
        <>
            <SEOBlock title="Apply to LCL"/>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="font-light text-4xl leading-tight">Apply to Life Changing Labs</h1>
                </TwoCol>
            </div>
            {sections.map(d => (
                <TwoCol label="logo" dark={true} className="py-6 border-b">
                    <h2 className="lcl-bold-uppercase mb-4">{d.heading}</h2>
                    <div className="content">
                        <ReactMarkdown source={d.content}/>
                    </div>
                </TwoCol>
            ))}
            <TwoCol label="logo" dark={true} className="py-12 border-t" id="faqs">
                <h2 className="text-xl mb-12">Frequently asked questions</h2>
                <div>
                    <h3 className="lcl-bold-uppercase mb-8">Application</h3>
                    {application.map(q => (
                        <div className="lcl-faq">
                            <Accordion label={(
                                <div className="lcl-faq-q lcl-dark-rect p-4">{q.question}</div>
                            )}>
                                <div className="lcl-faq-a lcl-dark-rect p-4 opacity-75 leading-relaxed">
                                    {q.answer.split("\n").map(x => (
                                        <p className="my-2">{x}</p>
                                    ))}
                                </div>
                            </Accordion>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">The LCL Accelerator</h3>
                    {accelerator.map(q => (
                        <div className="lcl-faq">
                            <Accordion label={(
                                <div className="lcl-faq-q lcl-dark-rect p-4">{q.question}</div>
                            )}>
                                <div className="lcl-faq-a lcl-dark-rect p-4 opacity-75 leading-relaxed">
                                    {q.answer.split("\n").map(x => (
                                        <p className="my-2">{x}</p>
                                    ))}
                                </div>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </TwoCol>
            <LanderCTA/>
        </>
    )
}