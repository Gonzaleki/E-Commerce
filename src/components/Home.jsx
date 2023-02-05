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
            <>
                
                <hr />
                <div className="services">
                    <div>
                        <i class="fa-sharp fa-solid fa-truck-fast"></i>
                        <p>We have free shiping for our oldest clients</p>
                    </div>
                    <div>
                        <i class="fa-sharp fa-solid fa-city"></i>
                        <p>Now we reach all major cities in USA</p>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-headset"></i>
                        <p>Full assitance 24/7 by every channel</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-users-line"></i>
                        <p>Our community keeps growing every day</p>
                    </div>
                </div>
            </>
            <Footer />
        </>
    )
};

export default Home;