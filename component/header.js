import Link from "next/link";

const headerStyle = {
  marginRight: 2,
  backgroundColor: "",
  borderRadius: "10px",
  fontFamily: "Arial",
  textDecoration: "none",
  boxShadow: "3px 3px",
  margin: "8px 8px",
  padding: "2px 8px",
};

const Header = () => {
  return (
    <div>
      <Link href="/about">
        <a style={headerStyle}>About</a>
      </Link>
      <Link href="/blog">
        <a style={headerStyle}>Blog</a>
      </Link>
      <Link href="/">
        <a style={headerStyle}>Index</a>
      </Link>
      <hr></hr>
    </div>
  );
};

export default Header;
