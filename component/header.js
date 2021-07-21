import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/about">
        <a>about </a>
      </Link>
      <Link href="/blog">
        <a>blog </a>
      </Link>
      <Link href="/">
        <a>index </a>
      </Link>
      <hr></hr>
    </div>
  );
};

export default Header;
