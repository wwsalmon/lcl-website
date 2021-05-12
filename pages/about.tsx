import TwoCol from "../components/twocol";
import SEOBlock from "../components/seo-block";
import PeopleGrid from "../components/people-grid";
import {sections} from "../content/pages/about.json";
import {summerAccelerator} from "../content/people.json";
import ReactMarkdown from 'react-markdown';

export default function About(){
    const sponsors = [
        "eac.png",
        "ehub.png",
        "saf.png",
        "m&t.jpg",
        "sciarabba.png",
        "tompkins.png",
        "silverstein.png",
        "ahlers.png"
    ];

    const partners = [
        "heroku.jpg",
        "aws.png",
        "github.png",
        "invision.png",
        "bizspark.png",
        "googlecloud.png",
        "millermayer.jpg",
        "protoio.png",
        "orson.jpg",
        "braintree.png",
        "startuptree.png"
    ];

    return (
        <>
            <SEOBlock title="About LCL"/>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="lcl-bold-uppercase mb-4">About</h1>
                    <h2 className="font-light text-4xl leading-tight">Life Changing Labs will empower <b>500 entrepreneurs</b> to change the lives of <b>1 million people by 2027.</b></h2>
                </TwoCol>
            </div>
            <div>
                {sections.map(d => (
                    <>
                        <TwoCol label="" className="mt-6 mb-4">
                            <h2 className="lcl-bold-uppercase">{d.heading}</h2>
                        </TwoCol>
                        <TwoCol label="logo" dark={true} className="mb-6 pb-6 border-b">
                            <div className="content">
                                <ReactMarkdown source={d.content}/>
                            </div>
                        </TwoCol>
                    </>
                ))}
                <TwoCol label="Our Team" id="team" className="my-6 pb-6 border-b" mobileLabel={true}>
                    <h1 className="opacity-50 mb-4">Summer Accelerator</h1>
                    <PeopleGrid data={summerAccelerator}/>
                </TwoCol>
                <TwoCol label="Sponsors" mobileLabel={true} className="my-6" id="sponsors">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                        {sponsors.map(x => (
                            <div className="flex items-center h-32">
                                <img src={`/img/sponsors/${x}`} alt="Logo of sponsor"/>
                            </div>
                        ))}
                    </div>
                    <hr className="my-8"/>
                    <h3 className="lcl-bold-uppercase mb-6">Resource providers</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {partners.map(x => (
                            <div className="flex items-center h-32">
                                <img src={`/img/sponsors/${x}`} alt="Logo of sponsor"/>
                            </div>
                        ))}
                    </div>
                </TwoCol>
            </div>
        </>
    )
}