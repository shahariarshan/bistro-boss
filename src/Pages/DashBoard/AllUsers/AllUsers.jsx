import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SectionTitle";
import useAxios from "../../../hooks/useAxios";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axiosSec = useAxios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSec.get('/users')
            return res.data
        }

    })
    const handelCartDelete = user => {
        //    console.log('deleted'); 
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

                    axiosSec.delete(`/users/${user._id}`)
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

    const handelMakeAdmin = user => {
        axiosSec.patch(`/admin/users/${user._id}`)
            .then(result => {
                // console.log('hiiiiiiiii',result.data);
                if (result.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    }

    return (
        <div className="px-5">
            <SectionTitle
                subHeading='How Many'
                heading='Manage All Users'
            ></SectionTitle>

            <div >
                <table className="table table-zebra ">
                    <thead>
                        <tr className="text-3xl text-black">
                            <th></th>
                            <th>All Users:{users.length}</th>
                            <th>Total Users:</th>



                        </tr>
                    </thead>
                </table>

                <div className=" ">
                    <table className="overflow-x-auto table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email </th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} />
                                            </div>
                                        </div>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        {
                                            user.role === 'admin' ? "Admin" :
                                                <td><button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost  bg-orange-300 btn-lg"><FaUsers className="text-2xl"></FaUsers></button></td>}


                                        <td><button onClick={() => handelCartDelete(user)} className="btn btn-ghost btn-lg"><MdOutlineDeleteSweep className="text-2xl"></MdOutlineDeleteSweep></button></td>


                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;