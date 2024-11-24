import { Outlet, Link } from "react-router-dom";

import '../css/Layout.css'

import bitforgeLogo from '../media/bitforgelogo.png'

const Layout = () => {
  return (
    <>
      <nav>
        <img src={bitforgeLogo} alt="BitForge Logo" id="logo"/>

        <div class="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/games">Games</Link>
            </li> */}
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;