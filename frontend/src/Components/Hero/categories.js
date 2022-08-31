import React, { useEffect, useState } from "react";
import "./hero.css";
function Categories({ show,categories }) {
  const [active, setActive] = useState(true);
  const [shake, setShake] = useState(false);
  const dropdownHandler = (e) => {
    e.preventDefault();
    active ? setActive(false) : setActive(true);
    setShake(true);
    setTimeout(() => setShake(false), 2000);
  };
  useEffect(() => {
    if (show) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [show]);
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
          {categories.map((item) => (
            <li>
              <a href="#">{item}</a>
            </li>
          ))}
       
        </ul>
      </div>
    </div>
  );
}

export default Categories;
