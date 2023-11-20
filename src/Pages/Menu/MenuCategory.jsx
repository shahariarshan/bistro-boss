import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import PopularItem from "../Shared/PopularItems/PopularItem";



const MenuCategory = ({items,img,title}) => {
    return (
        <div>
            {title && <Cover 
        img={img}
        title={title}
      
        ></Cover>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-24">
                {
                    items.map(item=><PopularItem 
                        key={item._id}
                        item={item}
                        ></PopularItem>)
                        
                }
             
            </div>
            <Link to={`/order/${title}`}>
            <div className="card-actions justify-center">
            <button className="btn  text-[#1F2937] mb-10 border-0 border-b-4 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
          </div>
            </Link>
        </div>
    );
};

export default MenuCategory;