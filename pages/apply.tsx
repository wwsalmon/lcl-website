import TwoCol from "../components/twocol";
import Link from "next/link";

export default function Apply(){
    return (
        <>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="font-light text-4xl leading-tight">Apply to Life Changing Labs</h1>
                </TwoCol>
            </div>
            <TwoCol label="logo" dark={true} className="py-12">
                <h2 className="lcl-bold-uppercase mb-8">Application process</h2>
                <div className="content">
                    <p>Our application process involves an online application as well as an interview (for those invited). </p>
                    <p><a href="https://lcl.startuptree.co/event/s/UcppDcwHdDHtuTiqNtd7vb/LCL-Accelerator-2021">Apply here for LCL Accelerator Class of 2021</a></p>
                    <h3>Round 1 (R1) Applications are Due </h3>
                    <p>R1 applicants will receive more consideration, as we prefer to build our class from the R1 pool. Those enrolling from R1 will also be eligible to receive (if requested) additional mentorship/coaching to better prepare them for the accelerator. </p>
                    <p>Although we prefer that you apply during R1, the R2 pool will also be given strong consideration. </p>
                    <p>Don’t procrastinate, <a href="https://lcl.startuptree.co/event/s/UcppDcwHdDHtuTiqNtd7vb/LCL-Accelerator-2021">apply now!</a></p>
                </div>
            </TwoCol>
            <TwoCol label="logo" dark={true} className="py-12 border-t">
                <h2 className="lcl-bold-uppercase mb-8">Deadlines</h2>
                <div className="content">
                    <h3>Round 1 - Begins October 1</h3>
                    <p>Application due on November 15 at 11:59 PM ET</p>
                    <p>Interviews - December 1-7</p>
                    <p>Decisions - December 15</p>
                    <h3>Round 2 - Begins February 1</h3>
                    <p>Application due on March 15 at 11:59 PM ET</p>
                    <p>Interviews - April 1-7</p>
                    <p>Decisions - April 15</p>
                </div>
            </TwoCol>
            <TwoCol label="logo" dark={true} className="py-12 border-t">
                <h2 className="lcl-bold-uppercase mb-8">Application Criteria</h2>
                <div className="content">
                    <p>Our startup accelerator class draws from the top 7% of university entrepreneurs nationally and internationally. </p>
                    <p className="font-bold">If you are serious about your venture and actively working on its development, we are interested in you. </p>
                    <p>We consider companies at various stages, but what we are looking for is a combination of entrepreneurial spark and emotional intelligence. Ideally, you have at least one (or more) co-founders that have been with you since the beginning. </p>
                    <p>We are open to any kind of idea, from software to social entrepreneurship.</p>
                    <p>What’s most important is your potential to disrupt the status quo and make a significant difference. </p>
                </div>
            </TwoCol>
            <TwoCol label="logo" dark={true} className="py-12 border-t">
                <h2 className="lcl-bold-uppercase mb-8">Application Criteria</h2>
                <div className="content">
                    <p>Our startup accelerator class draws from the top 7% of university entrepreneurs nationally and internationally. </p>
                    <p className="font-bold">If you are serious about your venture and actively working on its development, we are interested in you. </p>
                    <p>We consider companies at various stages, but what we are looking for is a combination of entrepreneurial spark and emotional intelligence. Ideally, you have at least one (or more) co-founders that have been with you since the beginning. </p>
                    <p>We are open to any kind of idea, from software to social entrepreneurship.</p>
                    <p>What’s most important is your potential to disrupt the status quo and make a significant difference. </p>
                </div>
            </TwoCol>
            <TwoCol label="logo" dark={true} className="py-12 border-t">
                <p className="content">Read our <Link href="/#faqs"><a>frequently asked questions.</a></Link></p>
            </TwoCol>
        </>
    )
}