import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { Form, Button } from "react-bootstrap";

const PriceSlider = () => {
  const [val, setVal] = useState({min : 0,
                                     max :100});


  const updateRange = (e, data) => {
    const newData = {min : data[0],
    max : data[1]}
    setVal(newData) 
  };

  useEffect(() => {
    console.log(val);
  });

  return (
    <>
      {" "}
      <div className="sidebar__item">
        <h4>Price</h4>
        <div className="price-range-wrap">
          <Slider
            getAriaLabel={() => "Temperature range"}
            min={10}
            max={200}
            value={[val.min,val.max]}
            color="error"
            valueLabelDisplay="auto"
            onChange={updateRange}
          />

          <div class="range-slider">
            <div class="price-input">
              <label className="price-label">$</label>
              <input
                type="number"
                id="minamount"
                value = {val.min}
               onChange={(event) => {
                setVal({ ...val, min: event.target.value });
                }}
              ></input>
              <label className="price-label">$</label>
              <input
                type="number"
                id="maxamount"
                value = {val.max}
                onChange={(event) => {
                  setVal({ ...val, max: event.target.value });
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
