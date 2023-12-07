import { FaUserEdit } from "react-icons/fa";
import SectionTitle from "../../../SectionTitle";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Update = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const {name,category,recipe,price,_id} =useLoaderData()
    
    const onSubmit = async(data) => {
        // console.log(data)

        // image upload to imgBB and then get an url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-Type':'multipart/form-data'
            }
            
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated from the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    
        // console.log(res.data);
       
    }
    return (
        <div className="lg:px-12 ">
            <SectionTitle
                subHeading='Refresh Info'
                heading='Update an item'
            ></SectionTitle>
            <div className="bg-slate-100 p-5 mt-7">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*:</span>
                        </label>
                        <input type="text"
                        defaultValue={name}
                            {...register("name",{required:true}) }
                            required
                            placeholder="Type recipe name here"
                            className="input input-bordered w-full " />

                    </div>

                    <div className="lg:flex gap-5">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*:</span>
                            </label>
                            <select defaultValue={category} 
                            {...register("category",{required:true})} className="select select-primary w-full ">
                                <option disabled selected>Select Items</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                          

                        </div>
                          {/* price  */}
                          <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Price*:</span>
                                </label>
                                <input type="number"
                                defaultValue={price}
                                    {...register("price",{required:true})}
                                    placeholder="Type Price here"
                                    className="input input-bordered w-full " />

                            </div>
                    </div>
                    <textarea
                    defaultValue={recipe}
                    {...register("recipe",{required:true})} 
                    placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>

                      
                   <div className="form-control w-full my-6">
                   <input 
                   {...register("image",{required:true})}
                   type="file" 
                   className="file-input file-input-ghost w-full max-w-xs" />
                   </div>
                   <button className="btn  btn-warning flex justify-center">
                    Update the item <FaUserEdit className="ml-2"></FaUserEdit>
                   </button>
                </form>
            </div>
        </div>
    );
};

export default Update;