import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import TwoCol from "../../components/twocol";
import {format} from "date-fns";
import SEOBlock from "../../components/seo-block";

export default function Post({frontmatter, markdownBody}) {

    return (
        <main>
            <SEOBlock title={frontmatter.title}/>
            <div className={`w-full lcl-bg-red pt-12 ${frontmatter.thumbnail ? "pb-20" : "pb-8"}`}>
                <TwoCol label="">
                    <p className="lcl-bold-uppercase">{frontmatter.tags}</p>
                    <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
                    <p>{format(new Date(frontmatter.date), "MMMM dd, yyyy")}</p>
                </TwoCol>
            </div>
            <div className={`${frontmatter.thumbnail ? "-mt-12" : "mt-12"} mb-12`}>
                <TwoCol label="" dark={true}>
                    {frontmatter.thumbnail && (
                        <img src={frontmatter.thumbnail} alt="" className="w-full mb-8"/>
                    )}
                    <div className="content text-xl">
                        <ReactMarkdown source={markdownBody}/>
                    </div>
                </TwoCol>
            </div>
        </main>
    )
}

export async function getStaticProps({...ctx}) {
    const {slug} = ctx.params;
    const content = await import(`../../content/news/${slug}.md`);
    const data = matter(content.default);
    const frontmatter = {
        title: data.data.title,
        date: data.data.date.toString(),
        tags: data.data.tags,
        thumbnail: data.data.thumbnail,
    }
    return {
        props: {
            frontmatter: frontmatter,
            markdownBody: data.content
        }
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys();
        const data = keys.map(key => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            return slug;
        });
        return data;
    })(require.context("../../content/news", true, /\.md$/));

    const paths = blogSlugs.map((slug) => `/news/${slug}`);

    return {
        paths,
        fallback: false,
    }
}