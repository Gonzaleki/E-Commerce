import ImageSlider from "./ImageSlider";
import '../styles/home.css'
import SpecialOffer from "./SpecialOffer";

function Home() {
    return (
        <>
            <ImageSlider />
            <SpecialOffer />
            <div className="discount">
                <h2>Get your 20% discount for this SUMMER</h2>
                <button  onClick={() => { alert('Hola') }}>
                    Apply <span>NOW</span> !!  
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    )
};

export default Home;