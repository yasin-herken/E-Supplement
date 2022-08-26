import React from "react";
import Header from "../Components/Header/header.js";
import InformationTable from "../Components/InformationTable/informationTable.js";
import Map from "../Components/Map/map.js";
import ContactForm from "../Components/ContactForm/contactForm.js";
import Footer from "../Components/Footer/footer.js";
const contact = () => {
  return (
    <>
      <Header />
      <InformationTable />
      <Map/>
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default contact;
