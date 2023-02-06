import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";
import Discount from "./Discount";
import Tendency from "./Tendency";
import Footer from './Footer'
import Services from "./Services";
import { useState, useEffect } from "react";

function Home() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/dataBase");
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
            <ImageSlider />
            <SpecialOffer products={data} />
            <Discount />
            <Tendency products={data}/>
            <hr />
            <Services />
            <Footer />
        </>
    )
};

export default Home;