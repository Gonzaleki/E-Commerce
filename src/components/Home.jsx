import ImageSlider from "./ImageSlider";
import '../styles/home.css'

function Home() {
    return (
        <>
            <ImageSlider />
            <div className="home">
                <h1 className="title">Special Offers</h1>
                <hr />
                <div className="cards">
                    <div className="card">
                        Esta carta es una prueba
                    </div>
                    <div className="card">
                        Esta carta es una prueba
                    </div>
                    <div className="card">
                        Esta carta es una prueba
                    </div>
                </div>
                <button>Show more</button>

            </div>
        </>
    )
};

export default Home;