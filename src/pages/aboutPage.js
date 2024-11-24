import frontImage from '../media/aboutimage.png'
import _4hoursleft from '../media/4Hoursleft.png'
import _Stike74 from '../media/stike74.png'
import flag from '../media/flag.png'

import '../css/Global.css'

const aboutPage = () => {

    function getAge(a) {
        var dob = new Date(a);  
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();  
          
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
          
        //extract year from date      
        var year = age_dt.getUTCFullYear();  
          
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);  

        return age
    }

    return (
        <>
      <div id="front">
        <img id="front-image" src={frontImage} alt="BigImage" />
      </div>


      <span id="content">
        <h1 id="content-header">These 2 guys</h1>
        <div id="main">
            <div id="holder">
                <img id="player-image" src={_4hoursleft} alt="4Hoursleft" />
                <div id="info-holder">
                    <p>4Hoursleft</p>
                    <p>Age - {getAge("04/27/2008")}</p>
                    <img id="flag" src={flag} alt="Philippines"/>
                </div>
            </div>

            <div id="holder">
                <img id="player-image" src={_Stike74} alt="Stike74" />
                <div id="info-holder">
                    <p>Stike74</p>
                    <p>Age - {getAge("10/30/2008")}</p>
                    <img id="flag" src={flag} alt="Philippines"/>
                </div>
            </div>
        </div>
      </span>

    </>
    );
}

export default aboutPage;