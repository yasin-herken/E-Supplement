import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Categories from "../Hero/categories";
import PriceSlider from "./priceSlider";
import ColorTable from "./colorTable";
import SizeTable from "./sizeTable";
import LatestProduct from "./latestProduct";
import { HOME_SHOW } from "../../Pages/defaultPageOption/showImg";

const productSidebar = (props) => {
  return (
    <>
      <div className="sidebar">
        <div className="row">
          <Categories show={HOME_SHOW} categories={props.categories} />
        </div>
        <LatestProduct />
      </div>
    </>
  );
};

export default productSidebar;
