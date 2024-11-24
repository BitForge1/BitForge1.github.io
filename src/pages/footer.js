import '../css/Global.css'

import bitforgeLogo from '../media/bitforgelogo.png'

const Footer = () => {
  return (
    <>
      <footer >
        <h3 id="footer-heading">made by nbit | React.js</h3>
        <p id="footer-p">my first time using react.js btw :D</p>

        <div id="footer-div">made for: <img id="footer-logo" src={bitforgeLogo} alt="BitforgeLogo"></img>only</div>
      </footer>
    </>
  )
};

export default Footer;