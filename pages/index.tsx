import TwoCol from "../components/twocol";
import LanderGrid from "../components/lander-grid";
import LanderCTA from "../components/lander-cta";
import {speakers, mentors} from "../content/people.json";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import SEOBlock from "../components/seo-block";
import matter from "gray-matter";
import {format} from "date-fns";

export default function Home({posts}) {
    console.log(posts);

    return (
        <>
            <SEOBlock/>
            <div className="w-full lcl-grad-1 py-8">
                <TwoCol label="logo" className="py-8 border-b">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:pr-10">
                            <h1 className="font-light leading-snug" style={{fontSize: "1.7rem"}}>Life Changing Labs is the startup accelerator and mentorship program for the <b>top 5% of university entrepreneurs worldwide</b>.<hr className="invisible my-3"/>For 0% equity.</h1>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <img src="/img/lander1.jpg" alt="Screenshot from LCL session"/>
                        </div>
                    </div>
                </TwoCol>
            </div>
            <div className="w-full lcl-grad-2 py-8">
                <TwoCol label="">
                    <h2 className="lcl-bold-uppercase">Our impact</h2>
                </TwoCol>
                <TwoCol label="logo" mobileLabel={true} className="pt-8 pb-16 border-b">
                    <p className="text-xl mb-12">LCL was founded at Cornell University in 2012. Since then, we've empowered <span className="font-bold lcl-yellow">over 80 startups,</span> which have raised <span className="font-bold lcl-pink">$20+ million</span> and <span className="font-bold lcl-light-yellow">impact 500,000+ people.</span></p>
                    <LanderGrid/>
                </TwoCol>
            </div>
            <div className="w-full lcl-bg-red py-8" id="howitworks">
                <TwoCol label="" className="mb-8">
                    <h2 className="lcl-bold-uppercase">How it works</h2>
                </TwoCol>
                <TwoCol label="logo" className="pb-16">
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
                    <h2 className="text-xl mb-12">Meet the people who are invested in your success.</h2>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">Mentors</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {mentors.map(x => (
                            <div className="lcl-rounded-rect p-4 flex items-center">
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#mentors">
                            <a className="lcl-button h-32">
                                See all mentors <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                    <h3 className="lcl-bold-uppercase mt-12 mb-8">Speakers</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {speakers.map(x => (
                            <div className="lcl-rounded-rect p-4 flex items-center">
                                <img src={x.headshot} alt={`Headshot of LCL mentor ${x.name}`} className="rounded-full w-20 mr-4"/>
                                <div>
                                    <h4 className="font-bold">{x.name}</h4>
                                    <p className="opacity-50 text-sm">{x.label}</p>
                                </div>
                            </div>
                        ))}
                        <Link href="/people#speakers">
                            <a className="lcl-button h-32">
                                See all speakers <span className="ml-2"><FaArrowRight/></span>
                            </a>
                        </Link>
                    </div>
                </TwoCol>
                <TwoCol label="logo" className="py-12 border-t border-b mt-12">
                    <h2 className="lcl-bold-uppercase">The latest from LCL</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-black mt-8">
                        {posts && posts.map(post => (
                            <Link href={`/blog/${post.slug}`}>
                                <a>
                                    <div className="bg-white rounded-lg">
                                        <div className="w-full h-32 lcl-bg-red rounded-t-lg bg-cover bg-center" style={{
                                            backgroundImage: `url(${post.thumbnail ? post.thumbnail : "/logo-new-white.svg"})`,
                                        }}/>
                                        <div className="p-4">
                                            <span className="lcl-bold-uppercase mr-2">{post.tags}</span>
                                            <span className="text-sm font-light">{format(new Date(post.date), "MMMM dd")}</span>
                                            <h3 className="mt-1 font-bold leading-snug">{post.title}</h3>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="flex mt-4">
                        <Link href="/blog"><a className="ml-auto px-4 h-12 lcl-button">All posts <span className="ml-2"><FaArrowRight/></span></a></Link>
                    </div>
                </TwoCol>
            </div>
            <LanderCTA/>
        </>
    )
}

export async function getStaticProps() {
    const posts = ((context) => {
        let keys = context.keys();
        if (keys.length >= 3) keys = keys.slice(0, 3);
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value: any = values[index];
            const document = matter(value.default);
            return {
                title: document.data.title,
                date: document.data.date.toString(),
                tags: document.data.tags || null,
                thumbnail: document.data.thumbnail || null,
                slug
            };
        });
        return data;
    })(require.context("../content/blog", true, /\.md$/));

    return {props: {posts}};
}