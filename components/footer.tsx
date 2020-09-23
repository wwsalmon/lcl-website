import TwoCol from "./twocol";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

export default function Footer(){
    return (
        <div className="w-full lcl-bg-red py-12 border-t">
            <TwoCol label="logo" mobileLabel={true}><h2 className="text-xl font-bold">Life Changing Labs</h2></TwoCol>
            <TwoCol label="Location" className="my-8">
                <p>409 College Ave, 2nd Floor (eHub location)<br/>
                    Ithaca NY, 14850</p>
            </TwoCol>
            <TwoCol label="Contact" className="my-8">
                <div>
                    contact@lifechanginglabs.com<br/>
                    <div className="flex mt-2">
                        <a className="mr-2" href="https://www.facebook.com/cornellehub/"><FaFacebook/></a>
                        <a className="mr-2" href="https://www.instagram.com/lifechanginglabs/"><FaInstagram/></a>
                        <a className="mr-2" href="https://www.youtube.com/channel/UCm_6mSvLQAPInTAAleEHu4A"><FaYoutube/></a>
                    </div>
                </div>
            </TwoCol>
            <TwoCol label="LCS" className="my-8 opacity-75">
                <p>Not in university yet? Start your entrepreneurial journey with <a href="https://lifechangingschool.org" className="opacity-75 hover:opacity-100 border-b">Life Changing School.</a></p>
            </TwoCol>
        </div>
    )
}