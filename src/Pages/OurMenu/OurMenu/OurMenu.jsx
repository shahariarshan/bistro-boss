import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessert from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../SectionTitle";
import MenuCategory from "../../Menu/MenuCategory";




const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>

            <Cover
                img={menuImg}
                title={'Our Menu'}
                descip={'Would you like to try a dish?'}
            ></Cover>
            <div className="mt-8">
                <SectionTitle

                    subHeading="Don't miss"
                    heading="Today's offer"
                ></SectionTitle>
            </div>
            {/* offered items  */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts items  */}
            <MenuCategory
                items={desserts}
                title='desserts'
                img={dessert}
                descip={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/* pizza  */}

            <MenuCategory
                items={pizza}
                title='pizza'
                img={pizzaImg}
                subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>

            {/* salad items  */}
            <MenuCategory
                items={salad}
                title='salad'
                img={saladImg}
                subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>

            {/* soup items  */}
            <MenuCategory
                items={soup}
                title='soup'
                img={soupImg}
                subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></MenuCategory>


        </div>
    );
};

export default OurMenu;