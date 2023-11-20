
import SectionTitle from "../../SectionTitle";
import PopularItem from "../Shared/PopularItems/PopularItem";
import useMenu from "../../hooks/useMenu";


const Menu = () => {
    const [menu]=useMenu()
    const popular =menu.filter(item =>item.category === 'popular')

    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const populerItems =data.filter(item =>item.category ==="popular")
    //         setMenu(populerItems)
    //     })
    // }
    // ,[])
    return (
       
        <section className="mb-16">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-24">
                {
                    popular.map(item=><PopularItem 
                        key={item._id}
                        item={item}
                        ></PopularItem>)
                }
            </div>
            <div className="card-actions justify-center mt-5">
         <button className="btn  text-[#1F2937] border-0 border-b-4 btn-outline">View full menu</button>
       </div>
        </section>
    );
};

export default Menu;