import axios from "axios";

const usePublic = axios.create({
    baseURL:'https://bistro-boss-server-mu-eosin.vercel.app'
})
const useAxiosPublic = () => {
    return  usePublic;
};

export default useAxiosPublic;