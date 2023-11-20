import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle";
import { FaUtensils } from "react-icons/fa";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async(data) => {
        console.log(data)

        // image upload to imgBB and then get an url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-Type':'multipart/form-data'
            }
            
        })
        console.log(res.data);
       
    }
    return (
        <div className="lg:px-12 ">
            <SectionTitle
                subHeading='Whats new'
                heading='add an item'
            ></SectionTitle>
            <div className="bg-slate-100 p-5 mt-7">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*:</span>
                        </label>
                        <input type="text"
                            {...register("name",{required:true})}
                            placeholder="Type recipe name here"
                            className="input input-bordered w-full " />

                    </div>

                    <div className="lg:flex gap-5">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*:</span>
                            </label>
                            <select {...register("category",{required:true})} className="select select-primary w-full ">
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
                                    {...register("price",{required:true})}
                                    placeholder="Type Price here"
                                    className="input input-bordered w-full " />

                            </div>
                    </div>
                    <textarea
                    {...register("recipe",{required:true})} 
                    placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                   
                   <div className="form-control w-full my-6">
                   <input 
                   {...register("image",{required:true})}
                   type="file" 
                   className="file-input file-input-ghost w-full max-w-xs" />
                   </div>
                   
                   <button className="btn  btn-warning">
                    Add items <FaUtensils className="ml-2"></FaUtensils>
                   </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;