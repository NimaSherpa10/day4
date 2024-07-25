import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Home />
        </li>
        <li>
          <About />
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
