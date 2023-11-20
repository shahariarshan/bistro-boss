import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCarts from "../../../hooks/useCarts";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [c] = useCarts()
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const NavItems = <>
        <li className="mr-3"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-3"><NavLink to='/menu'>Our Menu</NavLink></li>
        <li className="mr-3"><NavLink to='/order/salad'>Our Shop</NavLink></li>
        <li className="mr-3"><NavLink to='/dashboard/cart'>

            <TiShoppingCart className="text-lg"></TiShoppingCart>
            <div className="badge badge-secondary">+{c.length}</div>

        </NavLink></li>
        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <li><NavLink onClick={handelLogOut}>LogOut</NavLink></li>
            </> :
                <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </>
        }

    </>

    return (
        <div>

            <div className="navbar fixed z-10 text-white max-w-screen-xl bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-400 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <h1 className=" uppercase text-lg"><span className="font-bold ">BISTRO BOSS</span> <br />  R e s t a u r a n t
                    </h1>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;