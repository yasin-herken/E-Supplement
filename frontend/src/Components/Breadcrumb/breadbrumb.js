import React from 'react'
import { useLocation } from 'react-router-dom';
import Breadcrumb from "../../assets/img/breadcrumb.jpg";
function Breadbrumb(props) {
  const location = useLocation();
  return (
    <section className="breadcrumb-section set-bg" style={{backgroundImage:`url("${Breadcrumb}")`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{location.pathname.slice(1)}</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Vegetable’s Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Breadbrumb