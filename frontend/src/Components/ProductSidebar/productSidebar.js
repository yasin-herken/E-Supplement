import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Department from "./department";
import PriceSlider from "./priceSlider";
import ColorTable from "./colorTable";
import SizeTable from "./sizeTable";
import LatestProduct from "./latestProduct";

const productSidebar = () => {
  return (
    <>
    <div className="sidebar">
               <Department/>
               <PriceSlider/>
               <ColorTable/>
               <SizeTable/>
               <LatestProduct/>
              </div>
    </>
  )
}

export default productSidebar