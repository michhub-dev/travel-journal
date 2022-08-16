import NavBar from "./components/Navbar";
import React from "react";
import './index.css';
import Data from "./components/Data";
import data from "./data";
import Footer from './components/Footer';

export default function App() {
  
  const siteData = data.map((item) => {
    return (
      <Data 
      key={item.id}
      logo={item.logo}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
     /> 
    )
  })
  return (
    <>
      <NavBar />
     {siteData}
     <Footer />
    </>
  )
}