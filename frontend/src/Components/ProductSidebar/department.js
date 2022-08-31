import React from "react";

const department = (props) => {
  return (
    <>
      <div className="sidebar__item">
        <h4>Department</h4>
        <ul>
          {props.categories.map((item) => (
            <li>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default department;
