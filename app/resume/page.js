import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Resumecard from "@/components/Resumecard";
import React from "react";
import { BiSolidGraduation } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

import { Awards, Experience, education } from "@/resumeData";
export default function Resume() {
  return (
    <div>
      <Navbar />
      <div className="resumeContainer globContainerPadding">
        <Heading title={"RESUME"} />
        <div className="resumeHero">
          <div className="resumeDetailsCategory">
            <h1>
              <BiSolidGraduation className="resuCatIcon" /> Education
            </h1>
            <div className="resumCards">
              {education.map((card) => {
                return <Resumecard data={card} />;
              })}
            </div>
          </div>
          <div className="resumeDetailsCategory">
            <h1 className="flex">
              {" "}
              <BsFillBriefcaseFill className="resuCatIcon" /> Experience{" "}
            </h1>
            <div className="resumCards">
              {Experience.map((card) => {
                return <Resumecard data={card} />;
              })}
            </div>
          </div>
          <div className="resumeDetailsCategory">
            <h1>
              {" "}
              <FaAward className="resuCatIcon" /> Awards{" "}
            </h1>
            <div className="resumCards">
              {Awards.map((card) => {
                return <Resumecard data={card} />;
              })}
            </div>
          </div>
        </div>
        <section className="skills flex">
          <div className="working-skills">
            <h1>Working skills</h1>
            <div className="skillsWrapper">
              <div className="skill">
                <h4>HTML & CSS</h4>
                <div className="skilBar html">
                  <span className="tooltip">
                    <p>78%</p>
                  </span>
                </div>
              </div>
              <div className="skill">
                <h4>HTML & CSS</h4>
                <div className="skilBar">78%</div>
              </div>
              <div className="skill">
                <h4>HTML & CSS</h4>
                <div className="skilBar">78%</div>
              </div>
            </div>
          </div>
          <div className="knowleg fleStart">
            <h1>knowleg</h1>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
