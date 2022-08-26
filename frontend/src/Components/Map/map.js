import React from "react";

const map = () => {
  return (
    <div>
      {" "}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.208702093396!2d32.806320351042!3d39.91434549386226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f4b4abb8bf1%3A0x4c7bf18db5c540b9!2zU8O2xJ_DvHTDtnrDvCwgTmVyZ2l6IFNrLiBObzogNyBEOjc1LCAwNjU2MCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1str!2str!4v1632606436887!5m2!1str!2str"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          ariaHidden="false"
          tabIndex="0"
        > </iframe>
        <div className="map-inside">
          <i className="icon_pin"></i>
          <div className="inside-widget">
            <h4>Ankara</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default map;
