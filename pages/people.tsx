import TwoCol from "../components/twocol";
import {speakers, mentors} from "../content/people.json";
import {text} from "../content/pages/people.json"
import {summerAccelerator, boardMembers, pastLeadership} from "../content/people.json";
import PeopleGrid from "../components/people-grid";
import SEOBlock from "../components/seo-block";
import LanderCTA from "../components/lander-cta";
import ReactMarkdown from "react-markdown";

export default function People() {
    return (
        <>
            <SEOBlock title="People"/>
            <div className="w-full lcl-grad-3-sideways py-1">
                <TwoCol label="">
                    <h1 className="text-4xl font-light mb-8 mt-16">Team</h1>
                    <hr/>
                    <p className="my-6"><ReactMarkdown source={text}/></p>
                    <hr/>
                    <div className="my-6">
                        <span>Jump to: </span>
                        <a href="#summerAccelerator" className="border-b">Summer Accelerator Team</a><span> / </span>
                        <a href="#boardMembers" className="border-b">Board Members</a><span> / </span>
                        <a href="#pastLeadership" className="border-b">Past Leadership</a>
                    </div>
                </TwoCol>
            </div>
            <div className="my-12">
                <TwoCol label="logo" id="summerAccelerator" className="my-12 pb-12 border-b" dark={true}>
                    <h2 className="lcl-bold-uppercase mb-6">Summer Accelerator Team</h2>
                    <PeopleGrid data={summerAccelerator}/>
                </TwoCol>
                <TwoCol label="logo" id="boardMembers" className="my-12 pb-12 border-b" dark={true}>
                    <h2 className="lcl-bold-uppercase mb-6">Board Members</h2>
                    <PeopleGrid data={boardMembers}/>
                </TwoCol>
                <TwoCol label="logo" id="pastLeadership" dark={true}>
                    <h2 className="lcl-bold-uppercase mb-6">Past Leadership</h2>
                    <PeopleGrid data={pastLeadership}/>
                </TwoCol>
            </div>
            <div className="w-full lcl-grad-3-sideways py-1">
                <TwoCol label="">
                    <h1 className="text-4xl font-light mb-8 mt-16">Network</h1>
                    <hr/>
                    <p className="my-6"><ReactMarkdown source={text}/></p>
                    <hr/>
                    <div className="my-6">
                        <span>Jump to: </span>
                        <a href="#mentors" className="border-b">Mentors</a><span> / </span>
                        <a href="#speakers" className="border-b">Speakers</a><span></span>
                    </div>
                </TwoCol>
            </div>
            <div className="my-12">
                <TwoCol label="Speakers" id="speakers" className="my-12 pb-12 border-b" mobileLabel={true}>
                    <PeopleGrid data={speakers}/>
                </TwoCol>
                <TwoCol label="Mentors" id="mentors" mobileLabel={true}>
                    <PeopleGrid data={mentors}/>
                </TwoCol>
            </div>
            {/* <LanderCTA/> */}
        </>
    )
}