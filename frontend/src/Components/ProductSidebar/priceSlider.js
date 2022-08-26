import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import {  Form, Button } from "react-bootstrap";



const PriceSlider = () => {
  const [val, setVal] = useState({
    min : 0,
    max : 100,
  });
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const updateRange = (e, data) => {
    setVal(data);
  };

  const handleChange = (e , data) => {
    setVal(data[0]);
    console.log(data)
  }

  const handleChange1 = (e , data) => {
    setVal(data[1]);
    }

    useEffect(() => {
      console.log(val)
    },[val])

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
            defaultValue = {{min :0,max :30}}
            value={val}
            color="error"
            valueLabelDisplay="auto"
            onChange={updateRange}
          />

          <div class="range-slider">
            <div class="price-input">
           
                <label className="price-label">$</label>
                <input type="number" id="minamount" placeholder={val[0]} onChange={(event)=>{setVal({...val, min : event.target.value})}}></input>
                <label className="price-label">$</label>
                <input type="number" id="maxamount" placeholder={val[1]}  onChange={(event)=>{setVal({...val, max : event.target.value})}}></input>
               
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
