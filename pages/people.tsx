import TwoCol from "../components/twocol";
import {speakers, mentors, team} from "../content/people.json";
import PeopleGrid from "../components/people-grid";

export default function People() {
    return (
        <>
            <div className="w-full lcl-grad-3-sideways py-1">
                <TwoCol label="">
                    <h1 className="text-4xl font-light mb-8 mt-16">People</h1>
                    <hr/>
                    <p className="my-8">LCL works with startups and students year round with its team of highly dedicated engineers, designers, MBAs, JDs, and PhDs.</p>
                    <hr/>
                    <div className="my-8">
                        <span>Jump to: </span>
                        <a href="#mentors" className="border-b">Mentors</a><span> / </span>
                        <a href="#speakers" className="border-b">Speakers</a><span> / </span>
                        <a href="#team" className="border-b">Our Team</a>
                    </div>
                </TwoCol>
            </div>
            <div className="my-12">
                <TwoCol label="Our Team" id="team" className="my-12 pb-12 border-b" mobileLabel={true}>
                    <PeopleGrid data={team}/>
                </TwoCol>
                <TwoCol label="Speakers" id="speakers" className="my-12 pb-12 border-b" mobileLabel={true}>
                    <PeopleGrid data={speakers}/>
                </TwoCol>
                <TwoCol label="Mentors" id="mentors" mobileLabel={true}>
                    <PeopleGrid data={mentors}/>
                </TwoCol>
            </div>
        </>
    )
}