import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";
import Discount from "./Discount";
import Tendency from "./Tendency";
import Footer from './Footer'

function Home() {
    return (
        <>
            <ImageSlider />
            <SpecialOffer />
            <Discount />
            <Tendency />
            <Footer />
        </>
    )
};

export default Home;