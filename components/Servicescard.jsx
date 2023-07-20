import React from "react";
import Image from "next/image";
export default function Servicescard({ data }) {
  const { title, id, image, desc } = data;
  return (
    <div className="serviceCard flex">
      <div className="servIcon">
        <Image src={image} alt="" width={50} height={30} />
      </div>
      <div className="servDetails">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
