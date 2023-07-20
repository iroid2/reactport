import Navbar from "@/components/Navbar";
import React from "react";
import buttonInfor from "../script";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { TiDownloadOutline } from "react-icons/ti";
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="homeHero">
        <div className="card">
          <Image src={"/images/passp.jpg"} alt="" width={110} height={240} />
          <div className="profile-details">
            <h1>iroid</h1>
            <p>Web Developer/ Accountant</p>
          </div>
          <div className="socials">
            <FaFacebookF className="socialIcon fb" />
            <AiOutlineTwitter className="socialIcon twitter" />
            <BsBrowserChrome className="socialIcon pink" />
            <BiLogoLinkedin className="socialIcon" />
          </div>
          <button>
            <TiDownloadOutline className="downLdIcon" /> Download Cv
          </button>
        </div>
      </div>
    </div>
  );
}
