import React from 'react'
import Breadcrumb from "../../assets/img/breadcrumb.jpg";
function Breadbrumb() {
  return (
    <section className="breadcrumb-section set-bg" style={{backgroundImage:`url("${Breadcrumb}")`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Vegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <a href="/vegetables">Vegetables</a>
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