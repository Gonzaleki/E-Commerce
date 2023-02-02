import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";
import Discount from "./Discount";
import Tendency from "./Tendency";

function Home() {
    return (
        <>
            <ImageSlider />
            <SpecialOffer />
            <Discount />
            <Tendency />
            <footer>
                <h3>Este es el footer</h3>
                <div className="links">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-tiktok"></i>
                    <i className="fab fa-twitter"></i>
                </div>
                <h3 className='logo'>
                    My Store<i className="fab fa-react"></i>
                </h3>
            </footer>
        </>
    )
};

export default Home;