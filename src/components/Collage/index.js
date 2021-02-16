import React from "react";
import { CollageStyle } from "./style";
import imgone from "../../images/img-one.jpeg";
import imgthree from "../../images/img-three.jpg";
import imgfour from "../../images/img-four.jpg";
import imgseven from "../../images/img-seven.jpeg";


const Collage = () => {
  return (
    <CollageStyle>
      <div className="div-one">
        <div className="div-three">
          <img src={imgone} alt="resa-babe" className="img1" />
        </div>
        <div className="div-four">
          <img src={imgthree} alt="resa-babe" className="img2" />
        </div>
      </div>

      <div className="div-two">
        <div className="div-five">
          <img src={imgfour} alt="resa-babe" className="img3" />
        </div>
        <div className="div-six">
          <img src={imgseven} alt="resa-babe" className="img4" />
        </div>
      </div>
    </CollageStyle>
  );
};

export default Collage;
