import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <Link href="/">
        <a>index</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <h1>This page is from blog.js </h1>
    </div>
  );
};
export default Blog;
