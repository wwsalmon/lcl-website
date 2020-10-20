import TwoCol from "../../components/twocol";
import matter from "gray-matter";
import Link from "next/link";
import {format} from "date-fns";
import SEOBlock from "../../components/seo-block";

export default function News({posts}){
    return (
        <>
            <SEOBlock title="News"/>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="lcl-bold-uppercase mb-4">News</h1>
                    <h2 className="font-light text-4xl leading-tight">The latest from Life Changing Labs</h2>
                </TwoCol>
            </div>
            <div className="my-12">
                <TwoCol label="logo" dark={true}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {posts && posts.map(post => (
                            <Link href={`/news/${post.slug}`}>
                                <a>
                                    <div className="bg-white rounded-lg shadow-lg">
                                        <div className="w-full h-48 lcl-bg-red rounded-t-lg bg-cover bg-center" style={{
                                            backgroundImage: `url(${post.thumbnail ? post.thumbnail : "/logo-new-white.svg"})`,
                                        }}/>
                                        <div className="p-4">
                                            <span className="lcl-bold-uppercase mr-2">{post.tags}</span>
                                            <span className="text-sm font-light">{format(new Date(post.date), "MMMM dd")}</span>
                                            <h3 className="mt-1 font-bold leading-snug text-xl">{post.title}</h3>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </TwoCol>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = ((context) => {
        let keys = context.keys();
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
    })(require.context("../../content/news", true, /\.md$/));

    return {props: {posts}};
}