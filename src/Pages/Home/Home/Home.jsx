import { Helmet } from "react-helmet-async";
import Menu from "../../Menu/Menu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

// import MustTry from "./MustTry/MustTry";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>

            <Menu></Menu>
            {/* <MustTry></MustTry> */}
            <div className="mt-10">
                <Featured></Featured>
            </div>
            <div >
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;