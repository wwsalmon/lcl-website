import TwoCol from "../components/twocol";

export default function About(){
    return (
        <>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="lcl-bold-uppercase mb-4">About</h1>
                    <h2 className="font-light text-4xl leading-tight">Life Changing Labs will empower <b>500 entrepreneurs</b> to change the lives of <b>1 million people by 2027.</b></h2>
                </TwoCol>
            </div>
            <div>
                <TwoCol label={<>Who <br className="hidden lg:block"/>we <br className="hidden lg:block"/>are</>} mobileLabel={true} className="my-8">
                    <p className="text-xl">
                        Life Changing Labs was founded in 2012 by Peter Cortle to give a platform and a network for entrepreneurs at Cornell who needed a community as they developed their ventures.
                        <br/><br/>
                        After years of being the premier summer accelerator for student startups at Cornell, we have since expanded our mission to being a startup accelerator and elite network for top university entrepreneurs globally.
                    </p>
                </TwoCol>
                <TwoCol label={<>Our <br className="hidden lg:block"/>Philo<br className="hidden lg:block"/>sophy</>} className="my-8 py-8 border-t" mobileLabel={true}>
                    <p className="text-xl">We believe that the success of a company hinges on the growth of the people involved and the relationships that make up the team.</p>
                </TwoCol>
            </div>
        </>
    )
}