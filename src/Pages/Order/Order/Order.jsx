import { Helmet } from 'react-helmet-async';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

// const Order = () => {

//     const categories =['salad',"pizza",'soup','desserts','drinks']
//     const {category}=useParams()
//     const index =categories.indexOf(category)


//     const [tabIndex, setTabIndex] = useState(index)
//     const [menu] = useMenu()
//     const drinks = menu.filter(item => item.category === 'drinks')
//     const desserts = menu.filter(item => item.category === 'dessert')
//     const pizza = menu.filter(item => item.category === 'pizza')
//     const salad = menu.filter(item => item.category === 'salad')
//     const soup = menu.filter(item => item.category === 'soup')
//     return (
//         <div>
//             <Helmet>
//                 <title>
//                     Bistro Boss | Our Shop
//                 </title>
//             </Helmet>
//             <Cover img={orderImg} title='OUR SHOP' descip='Would you like to try a dish?'></Cover>


//             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//                 <TabList className='mt-10 flex justify-center pb-8 lg:font-semibold '>
//                     <Tab>Salad</Tab>
//                     <Tab>Pizza</Tab>
//                     <Tab>Soup</Tab>
//                     <Tab>Deserts</Tab>
//                     <Tab>Drinks</Tab>

//                 </TabList>
//             {/* pizza itms  */}


//                 <TabPanel >
//                     {/* <div className='grid grid-cols-1 md:grid-cols-3 mx-auto container'>
//         {
//             pizza.map(item =><OrderCard
//             key={item._id}
//             item={item}
//             ></OrderCard>)
//         }
//         </div> */}
//                     <OrderTab items={pizza}></OrderTab>
//                 </TabPanel>

//                 {/* salad items  */}


//                 <TabPanel >
//                     {/* <div className='grid grid-cols-1 md:grid-cols-3'>
//         {
//             salad.map(item =><OrderCard
//             key={item._id}
//             item={item}
//             ></OrderCard>)
//         }
//         </div> */}
//                     <OrderTab items={salad}></OrderTab>
//                 </TabPanel>

//                 {/* soup  */}


//                 <TabPanel >
//                     {/* <div className='grid grid-cols-1 md:grid-cols-3'>
//         {
//             soup.map(item =><OrderCard
//             key={item._id}
//             item={item}
//             ></OrderCard>)
//         }
//         </div> */}
//                     <OrderTab items={soup}></OrderTab>
//                 </TabPanel>


//                 {/* drinks  */}


//                 <TabPanel >
//                     {/* <div className='grid grid-cols-1 md:grid-cols-3'>
//         {
//             drinks.map(item =><OrderCard
//             key={item._id}
//             item={item}
//             ></OrderCard>)
//         }
//         </div> */}

//                     <OrderTab items={drinks}></OrderTab>
//                 </TabPanel>


//                 {/* dessert  */}


//                 <TabPanel >
//                     {/* <div className='grid grid-cols-1 md:grid-cols-3'>
//                         {
//                             desserts.map(item => <OrderCard
//                                 key={item._id}
//                                 item={item}
//                             ></OrderCard>)
//                         }
//                     </div> */}
//                      <OrderTab items={desserts}></OrderTab>
//                 </TabPanel>


//             </Tabs>
//         </div>
//     );
// };

// export default Order;
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='mt-10 flex justify-center pb-8 lg:font-semibold '>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;