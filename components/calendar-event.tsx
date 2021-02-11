import {format} from "date-fns";
import ReactMarkdown from "react-markdown";
import Accordion from "react-robust-accordion";
import {useState} from "react";
import {FaAngleDown, FaAngleUp, FaExternalLinkAlt} from "react-icons/fa";

export default function CalendarEvent(props: { thumbnail: string, title: string, markdownBody: string, date: string, link: string, past?: boolean }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <Accordion label={(
                <div className="sm:flex items-center">
                    <div className="sm:w-48 flex-shrink-0 h-48 lcl-bg-red rounded-lg bg-cover bg-center" style={{
                        backgroundImage: `url(${props.thumbnail ? props.thumbnail : "/logo-new-white.svg"})`,
                    }}/>
                    <div className="p-4">
                        <h3 className="mt-1 font-bold leading-snug text-xl">{props.title}</h3>
                        <span className="">{format(new Date(props.date), "MMMM dd 'at' h:mm aa 'GMT'XXX")}</span>
                        <div className="flex mt-4">
                            <a className="p-2 border rounded lcl-bg-blue" href={props.link}>
                                {props.past ? "Event page" : "Register"} <FaExternalLinkAlt/>
                            </a>
                            <button className="p-2 border rounded ml-2" onClick={() => setOpen(!open)}>
                                {open ? <>Hide <FaAngleUp/></> : <>Read more <FaAngleDown/></>}
                            </button>
                        </div>
                    </div>
                </div>
            )} openState={open} setOpenState={setOpen} noClickLabel={true}>
                <div className="p-4 border-t">
                    <ReactMarkdown source={props.markdownBody}/>
                </div>
            </Accordion>
        </div>
    )
}