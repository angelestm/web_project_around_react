import logo from "../images/logo.png";

function Header() {
  return (
      <header className="header">
        <img id="logo" alt="logo" className="logo" src={logo} />
        <hr />
      </header>
  );
}

export default Header;