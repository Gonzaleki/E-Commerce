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
      fetch('/api/mydata')
      .then(res=> res.json())
      .then(res => setData(res))
      .catch(error => console.error(error));
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