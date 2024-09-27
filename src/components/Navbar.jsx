import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <div className="my-3 md:mx-10">
      <div className="navbar bg-base-100 shadow-xl rounded-box">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/experience`}>Experience</Link>
              </li>
              <li>
                <Link to={`/skills`}>Skills</Link>
              </li>
              <li>
                <Link to={`/interest`}>Interest</Link>
              </li>
              <li>
                <Link to={`/awards`}>Awards</Link>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="btn btn-ghost text-xl hidden lg:flex">
            M Nabil Muyassar R
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/experience`}>Experience</Link>
            </li>
            <li>
              <Link to={`/skills`}>Skills</Link>
            </li>
            <li>
              <Link to={`/interest`}>Interest</Link>
            </li>
            <li>
              <Link to={`/awards`}>Awards</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
