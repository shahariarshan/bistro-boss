import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";



const useCarts = () => {
    const axiosSecure = useAxios()
    const { user } = useAuth()
    const { refetch, data: c = [] } = useQuery({
        queryKey: ['c', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [c, refetch]
};

export default useCarts;