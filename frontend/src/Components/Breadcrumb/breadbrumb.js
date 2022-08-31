import React from 'react'
import Breadcrumb from "../../assets/img/breadcrumb.jpg";
function Breadbrumb(props) {
  return (
    <section className="breadcrumb-section set-bg" style={{backgroundImage:`url("${Breadcrumb}")`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{props.pageName}</h2>
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