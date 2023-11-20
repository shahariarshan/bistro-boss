import SectionTitle from "../../../SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import featuredCss from '../Featured/Featured.css'

const Featured = () => {
    return (
        <section className="featured-item bg-fixed pt-10">
                 <SectionTitle 
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
                ></SectionTitle>
           
            <div className="lg:flex justify-center items-center bg-opacity-20 bg-slate-950  pb-20 pt-12 lg:px-36">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="md:ml-10 text-white">
                <h1>March 20, 2023</h1>
                <h2>WHERE CAN I GET SOME?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                <button className="btn btn-outline mt-2 border-0 border-b-4 text-white">Read More</button>
            </div>
            </div>
        </section>
    );
};

export default Featured;