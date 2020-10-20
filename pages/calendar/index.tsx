import TwoCol from "../../components/twocol";
import matter from "gray-matter";
import SEOBlock from "../../components/seo-block";
import CalendarEvent from "../../components/calendar-event";
import Accordion from "react-robust-accordion";
import {FaAngleDown} from "react-icons/fa";

export default function Calendar({posts}){
    return (
        <>
            <SEOBlock title="Calendar"/>
            <div className="w-full lcl-grad-1-sideways pt-16 pb-8">
                <TwoCol label="">
                    <h1 className="lcl-bold-uppercase mb-4">Calendar</h1>
                    <h2 className="font-light text-4xl leading-tight">Upcoming LCL events</h2>
                </TwoCol>
            </div>
            <div className="my-12">
                <TwoCol label="logo" dark={true}>
                    {posts && posts.filter(d => new Date(d.date) > new Date()).sort((a, b) => new Date(a.date) > new Date(b.date)).map(post => (
                        <div className="mb-4">
                            <CalendarEvent title={post.title} thumbnail={post.thumbnail} markdownBody={post.markdownBody} date={post.date} link={post.link}/>
                        </div>
                    ))}
                    <Accordion label={(
                        <div className="h-16 flex items-center mb-4">
                            <h3 className="lcl-bold-uppercase">Past events</h3>
                            <div className="ml-auto">
                                <FaAngleDown/>
                            </div>
                        </div>
                    )}>
                        {posts && posts.filter(d => new Date(d.date) < new Date()).sort((a, b) => new Date(a.date) > new Date(b.date)).map(post => (
                            <div className="mb-4">
                                <CalendarEvent title={post.title} thumbnail={post.thumbnail} markdownBody={post.markdownBody} date={post.date} link={post.link} past={true}/>
                            </div>
                        ))}
                    </Accordion>
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
                thumbnail: document.data.thumbnail || null,
                link: document.data.link || null,
                markdownBody: document.content || null,
                slug
            };
        });
        return data;
    })(require.context("../../content/calendar", true, /\.md$/));

    return {props: {posts}};
}