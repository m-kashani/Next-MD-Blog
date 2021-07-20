import Link from "next/link";
const About = () => {
  return (
    <div>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/">
        <a>index</a>
      </Link>

      <h1>This page is from About.js </h1>
    </div>
  );
};
export default About;
