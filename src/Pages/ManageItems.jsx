import { MdOutlineDeleteSweep } from "react-icons/md";
import SectionTitle from "../SectionTitle";
import useMenu from "../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, ,refetch] = useMenu()
    const axiosSecure =useAxios()
    // manage items 
    const handelUpdateItem = (item) => {

    }
    const handelDeleteItem =(item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res =await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
if(res.data.deletedCount > 0){
    // refetch 
    refetch()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${item.name} is deleted`,
        showConfirmButton: false,
        timer: 1500
      });
}
            }
        });

    }

    return (
        <div className="lg:p-9">
            <SectionTitle
                heading='Manage All Items'
                subHeading='Hurry Up'
            ></SectionTitle>
            <div>
            <table className="table table-zebra ">
                    <thead>
                        <tr className="text-3xl text-black">
                            <th></th>
                            <th className="text-center">Total items:{menu.length}</th>
                            



                        </tr>
                    </thead>
                </table>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>

                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.name}</span>
                                    </td>
                                    <td>{item.price}$</td>
                                    <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button onClick={() => handelUpdateItem(item)} className="btn btn-warning btn-md"><FaEdit className=" text-red-700 text-xl"></FaEdit></button>
                                    </Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteItem(item)} className="btn btn-warning btn-md"><MdOutlineDeleteSweep className="text-2xl"></MdOutlineDeleteSweep></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;