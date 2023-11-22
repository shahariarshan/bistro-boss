
import SectionTitle from "../../../SectionTitle";
import useCarts from "../../../hooks/useCarts";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxios()
    const handelCartDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/carts/${id}`)
                        .then(result => {
                            // console.log(result);
                            if (result.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                            refetch()
                        })
                }
            });
    }
    return (
        <div className="px-5">
            <SectionTitle
                subHeading='My Cart'
                heading='Wanna Add More'
            ></SectionTitle>

            <div >
                <div className="flex justify-evenly mt-5 mb-8">
                    <h2 className="text-2xl font-semibold">Items: {cart.length}</h2>
                    <h2 className="text-2xl font-semibold ml-2"><span className="ml-2">Total Price:$</span>{totalPrice}</h2>

                    {
                    cart.length ?
                    
                     <Link to="/dashboard/payment">
                        <button className="btn btn-warning">Pay</button>
                    </Link> :
                        <button disabled className="btn btn-warning">Pay</button>
                    }

                </div>
                <div className="mt-10 ">
                    <table className="overflow-x-auto table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td>{item.name}</td>
                                        <td>{item.price}$</td>

                                        <button onClick={() => handelCartDelete(item._id)} className="btn btn-ghost btn-lg"><MdOutlineDeleteSweep className="text-2xl"></MdOutlineDeleteSweep></button>
                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};

export default Cart;