import TwoCol from "../components/twocol";

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
    ]

    return (
        <>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="lcl-bold-uppercase mb-4">About</h1>
                    <h2 className="font-light text-4xl leading-tight">Life Changing Labs will empower <b>500 entrepreneurs</b> to change the lives of <b>1 million people by 2027.</b></h2>
                </TwoCol>
            </div>
            <div>
                <TwoCol label={<>Who <br className="hidden lg:block"/>we <br className="hidden lg:block"/>are</>} mobileLabel={true} className="my-12">
                    <p className="text-xl">
                        Life Changing Labs was founded in 2012 by Peter Cortle to give a platform and a network for entrepreneurs at Cornell who needed a community as they developed their ventures.
                        <br/><br/>
                        After years of being the premier summer accelerator for student startups at Cornell, we have since expanded our mission to being a startup accelerator and elite network for top university entrepreneurs globally.
                    </p>
                </TwoCol>
                <TwoCol label={<>Our <br className="hidden lg:block"/>Philo<br className="hidden lg:block"/>sophy</>} className="my-12 py-12 border-t" mobileLabel={true}>
                    <p className="text-xl">We believe that the success of a company hinges on the growth of the people involved and the relationships that make up the team.</p>
                </TwoCol>
                <TwoCol label="logo" dark={true} className="my-12 py-12 border-t" id="sponsors">
                    <h3 className="lcl-bold-uppercase mb-8">Sponsors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
                        {sponsors.map(x => (
                            <div className="flex items-center h-32">
                                <img src={`/img/sponsors/${x}`} alt="Logo of sponsor"/>
                            </div>
                        ))}
                    </div>
                    <hr className="my-12"/>
                    <h3 className="lcl-bold-uppercase mb-8">Resource providers</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
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