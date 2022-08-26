import React from "react";
import Slider from '@mui/material/Slider';


const priceSlider = () => {
  return (
    <>
      {" "}
      <div className="sidebar__item">
        <h4>Price</h4>
        <div className="price-range-wrap">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={[10,200]}
        //    onChange={}
            valueLabelDisplay="auto"
     //       getAriaValueText={valuetext}
            disableSwap
          />
        </div>
      </div>
    </>
  );
};

export default priceSlider;
