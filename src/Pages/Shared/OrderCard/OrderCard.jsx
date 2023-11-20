import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import useCarts from "../../../hooks/useCarts";



const OrderCard = ({ item }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    // axios fromm hook 
    const axiosSecure =useAxios()
    const { name, recipe, image, category, price, _id } = item;
    const [,refetch]=useCarts()
    const handelAddCart = () => {
        if (user && user.email) {
            console.log( user.email);
            
            // add to cart on db 
            const cartItem = {
                cartId:_id,
                email: user.email,
                name,
                image,
                price,
                category
            }
            
            axiosSecure.post('/carts', cartItem)
                .then(result => {
                    // console.log(result.data);
                    if (result.data.insertedId) {
                        
                        Swal.fire({
                            title: "Sweet!",
                            text: `${name} added on cart`,
                            imageUrl: `${image}`,
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: "Custom image"
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login",
                text: "Before add to the cart please log in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login?"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
          
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-600 text-white absolute right-0 rounded-lg mt-2 mr-4 p-1"> ${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div onClick={()=>handelAddCart(item)}
                        className="card-actions justify-center">
                        <button className="btn  text-[#BB8506] border-0 border-b-4 btn-outline">Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderCard;