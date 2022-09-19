import React from "react";
import Department from "../Department/department";

const productSidebar = (props) => {
  return (
    <>
      <Department categories={props.categories} />
    </>
  );
};

export default productSidebar;
