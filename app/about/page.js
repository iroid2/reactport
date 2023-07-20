import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { servicesCards } from "@/script";
import Servicescard from "@/components/Servicescard";
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container globContainerPadding">
        <div className="about-hero">
          <div className="top-abt-hero">
            <Heading title="About Me" />
          </div>
          <div className="bottm-abt-hero">
            <div className="left-btm-abt">
              <Image
                src={"/images/about.jpg"}
                alt=""
                width={200}
                height={100}
              />
            </div>
            <div className=" right-btm-abt">
              <h1>Who am i?</h1>
              <p>
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
                <br></br>
                <br></br> My aim is to bring across your message and identity in
                the most creative way. I created web design for many famous
                brand companies.
              </p>
              <div className="personalInfor">
                <h1>Personal Details</h1>
                <div className="personDet flex">
                  <div className="phone flex">
                    <div className="leftPhone fleStart">
                      <h2 className="alignSelfC">📲</h2>
                    </div>
                    <div className="rightPhone">
                      <p>Phone</p>
                      <h4>+123 456 7890</h4>
                    </div>
                  </div>
                  <div className="phone flex">
                    <div className="leftPhone fleStart">
                      <h2 className="alignSelfC">📭</h2>
                    </div>
                    <div className="rightPhone">
                      <p>Location</p>
                      <h4>Hong kong china</h4>
                    </div>
                  </div>
                  <div className="phone flex">
                    <div className="leftPhone ">
                      <h2 className="alignSelfC ">📧</h2>
                    </div>
                    <div className="rightPhone">
                      <p>Email</p>
                      <h4>example@mail.com</h4>
                    </div>
                  </div>
                  <div className="phone flex">
                    <div className="leftPhone fleStart">
                      <h2 className="alignSelfC ">🗓️</h2>
                    </div>
                    <div className="rightPhone">
                      <p>Birthday</p>
                      <h4>May 27, 1990</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <h1 className="servicesHeader">What I do!</h1>
          <div className="servicesList">
            {servicesCards.map((servicesCard) => {
              return <Servicescard data={servicesCard} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
