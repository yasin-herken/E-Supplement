import React from "react";

const sizeTable = () => {
  return (
    <>
      {" "}
      <div className="sidebar__item">
        <h4>Popular Size</h4>
        <div className="sidebar__item__size">
          <label htmlFor="large">
            Large
            <input type="radio" id="large"></input>
          </label>
        </div>
        <div className="sidebar__item__size">
          <label htmlFor="medium">
            Medium
            <input type="radio" id="medium"></input>
          </label>
        </div>
        <div className="sidebar__item__size">
          <label htmlFor="small">
            Small
            <input type="radio" id="small"></input>
          </label>
        </div>
        <div className="sidebar__item__size">
          <label htmlFor="tiny">
            Tiny
            <input type="radio" id="tiny"></input>
          </label>
        </div>
      </div>
    </>
  );
};

export default sizeTable;
