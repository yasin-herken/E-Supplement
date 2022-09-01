import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hero.css";

function Categories(props) {
  const [active, setActive] = useState(true);
  const [shake, setShake] = useState(false);
  const dropdownHandler = (e) => {
    e.preventDefault();
    active ? setActive(false) : setActive(true);
    setShake(true);
    setTimeout(() => setShake(false), 2000);
  };
  useEffect(() => {
    if (props.show) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.show]);

 


  return (
    <div className="col-lg-3">
      <div className="hero__categories" onClick={dropdownHandler}>
        <div className="hero__categories__all">
          <i className="fa fa-bars" />
          <span>All departments</span>
        </div>
        <ul
          className={shake ? `shake` : null}
          style={{ display: active ? "block" : "none" }}
        >
          {props.categories.map((item) => (
            <li>
              <Link to="/shop" onClick={() =>{
               // props.setCat({item})
                console.log("clicked")
              }}>{item.category}</Link>
            </li>
          ))}
       
        </ul>
      </div>
    </div>
  );
}

export default Categories;
