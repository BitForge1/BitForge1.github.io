import frontImage from '../media/frontimage.png'
import placeholderImage from '../media/512x512LOGOv1.1.png'

import '../css/Global.css'

const Home = () => {
  return (
    <>
      <div id="front">
        <img id="front-image" src={frontImage} alt="BigImage" />
      </div>


      <span id="content">
        <h1 id="content-header">Play our game now!</h1>
        <div id="gamecontainer">
          <div id="imageholder"><img src={placeholderImage} alt="GameIcon" /></div>

          <div id="rightside">
            <div id="textholder">
              <p id="title">[ tambay lang ]</p>
              <p>Tambay saglit, ilabas ang kulit sabay missyoubaby malupit</p>
            </div>
            <a href="https://www.roblox.com/games/17844319623" target="_blank" rel="noopener noreferrer"><button id="playbutton">Play</button></a>
          </div>


        </div>
      </span>

    </>
  );
};

export default Home;