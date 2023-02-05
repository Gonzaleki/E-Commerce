import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";
import Discount from "./Discount";
import Tendency from "./Tendency";
import Footer from './Footer'
import Services from "./Services";
import UploadForm from "./UploadForm";

function Home() {


    return (
        <>
            <ImageSlider />
            <SpecialOffer />
            <Discount />
            <Tendency />
            <hr />
            <Services />
            <UploadForm />
            <Footer />
        </>
    )
};

export default Home;