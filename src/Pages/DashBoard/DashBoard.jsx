import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FcShop } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";
const DashBoard = () => {
    const [c] = useCarts()
    const [isAdmin] =useAdmin()
    return (

        <div className="drawer lg:drawer-open flex">
            {/* <div className="menu w-2/6 lg:w-3/12  bg-gray-400 h-screen">

                </div> */}

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Open</label>

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full font-serif space-y-3 z-50 bg-gray-100  text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin? <>
                        <li className="text-2xl   "><NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/manageItems'><FaList></FaList>Manage Items</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/manageBooking'><FaBook></FaBook>Manage Booking</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/allUser'><FaUsers></FaUsers>All User</NavLink></li>
                        </>
                        :
                        <>
                        <li className="text-2xl   "><NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/reservation'><SlCalender></SlCalender>Reservation</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/payment'><RiSecurePaymentLine></RiSecurePaymentLine>Payment History</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/cart'><BsFillCartCheckFill>({c.length})</BsFillCartCheckFill>My Cart</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/addReview'><VscPreview></VscPreview>Add Review</NavLink></li>
                    <li className="text-2xl  "><NavLink to='/dashboard/myBooking'><TbBrandBooking></TbBrandBooking>My Booking</NavLink></li>
                        </>
                    }


                {/* common item for admin and users  */}
                
                    <div className="divider"></div>
                    <li className="text-2xl   "><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li className="text-2xl   "><NavLink to='/menu'><BiSolidFoodMenu></BiSolidFoodMenu> Menu</NavLink></li>
                    <li className="text-2xl   "><NavLink to='/order/salad'><FcShop></FcShop> Shop</NavLink></li>
                    <li className="text-2xl   "><NavLink to='/contact'><IoMdContacts></IoMdContacts> Contact</NavLink></li>
                </ul>

            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default DashBoard;



