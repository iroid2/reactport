import React from "react";
import { posts } from "@/blogs";
import Heading from "@/components/Heading";
import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function page({ params: { slug } }) {
  const post = posts.find((post) => {
    return post.slug == slug;
  });
  return (
    <div>
      <Navbar />
      <div className=" postWrapper ">
        <div className="page-post">
          <h1>{post.title}</h1>
          <Image src={post.image} alt="" width={700} height={400} />
          <h3>{post.description}</h3>
        </div>
        <div className="side-menu">
          <h1>Other Posts</h1>
        </div>
      </div>
    </div>
  );
}
