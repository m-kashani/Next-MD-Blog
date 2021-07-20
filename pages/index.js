import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href="/blog">
        <a>blog</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>This page is from Index.js </h1>
    </div>
  );
};
export default index;
