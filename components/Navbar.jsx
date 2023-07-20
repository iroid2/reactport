"use client";
import React, { useState } from "react";
import Buttons from "./Link";
import { linkInfor } from "@/script";
import Link from "next/link";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaBloggerB } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const currentPath = usePathname();
  const [active, setactive] = useState("Home");

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <AiFillHome className="menuIcon" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <AiOutlineUser className="menuIcon" />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <FcDocument className="menuIcon" />,
    },
    {
      name: "Works",
      path: "/works",
      icon: <BiSolidBriefcase className="menuIcon" />,
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <FaBloggerB />,
      // icon: blogIcon,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];
  function showHome() {
    setactive("Home");
  }
  function showAbout() {
    setactive("About");
  }
  function showResume() {
    setactive("Resume");
  }
  function showWorks() {
    setactive("Works");
  }
  function showBlogs() {
    setactive("Blogs");
  }
  function showContact() {
    setactive("Contact");
  }
  return (
    <div className="navBar">
      <div className="leftNav">
        <Image src={"/images/logo.png"} alt="" width={150} height={30} />
      </div>
      <div className="rightNav">
        {/* <Link
          className={active == "Home" && currentPath ? "activePage" : ""}
          onClick={showHome}
          href={"#"}
        >
          <p className="center df">
            <AiFillHome className="menuIcon" /> Home
          </p>
        </Link>

        <Link
          className={active == "About" ? "activePage" : ""}
          onClick={showAbout}
          href={"/about"}
        >
          <p className="center df">
            <AiOutlineUser className="menuIcon" /> About
          </p>
        </Link>
        <Link
          className={active == "Resume" ? "activePage" : ""}
          onClick={showResume}
          href={"/resume"}
        >
          <p className="center df">
            <FcDocument className="menuIcon" /> Resume
          </p>
        </Link>

        <Link
          className={active == "Works" ? "activePage" : ""}
          onClick={showWorks}
          href={"/works"}
        >
          <p className="center df">
            <BiSolidBriefcase className="menuIcon" /> Works
          </p>
        </Link>

        <Link
          className={active == "Blogs" ? "activePage" : ""}
          onClick={showBlogs}
          href={"/blogs"}
        >
          <p className="center df">
            <FaBloggerB className="menuIcon" /> Blogs
          </p>
        </Link>
        <Link
          className={active == "Contact" ? "activePage" : ""}
          onClick={showContact}
          href={"/contact"}
        >
          <p className="center df">
            <RiContactsBookLine className="menuIcon" /> Contact
          </p>
        </Link> */}
        {navLinks.map((link, i) => {
          return (
            <Link
              className={link.path == currentPath ? "activePage" : ""}
              key={i}
              href={link.path}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </div>
      {/* <BsFillMoonFill className="moonico" />
      <GiHamburgerMenu className="hamMenu" /> */}
    </div>
  );
}
