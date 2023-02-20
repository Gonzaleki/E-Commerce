import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";
import Discount from "./Discount";
import Tendency from "./Tendency";
import Footer from './Footer'
import Services from "./Services";
import { FetchContext } from "../App";
import { useContext } from "react";

function Home(value) {
    const data = useContext(FetchContext)

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