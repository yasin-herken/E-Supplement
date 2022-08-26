import React from "react";
import breadcrumb from "../../assets/img/breadcrumb.jpg";

const informationTable = () => {
  return (
    <>
      <section
        class="breadcrumb-section set-bg"
        style={{ backgroundImage: `url("${breadcrumb}")` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Contact Us</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_phone"></span>
                <h4>Phone</h4>
                <p>+90-0(312)-219-00-87</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_pin_alt"></span>
                <h4>Address</h4>
                <p>
                  Via Flat İş ve Yaşam Merkezi Beştepe Mah. Nergiz Sok. Bina
                  No:7 Ofis No:40 Söğütözü Ankara 06560
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_clock_alt"></span>
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_mail_alt"></span>
                <h4>Email</h4>
                <p>donmeoglubilisim@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default informationTable;
