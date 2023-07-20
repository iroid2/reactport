import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { posts } from "@/blogs";
import Link from "next/link";
export default function Blog() {
  console.log(posts);
  return (
    <div className="blogs-container globContainerPadding">
      <Heading title={"BLOGS"} />

      <div className="blogs-section">
        {posts.map((blog) => {
          return (
            <Link href={`/posts/${blog.slug}`} className="blog">
              <div className="blog-thumbnail">
                <Image src={blog.image} alt="" width={300} height={300} />
              </div>
              <div className="blog-details">
                <h1>{blog.title}</h1>

                <h3>{blog.description}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
