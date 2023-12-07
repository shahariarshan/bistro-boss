import useAuth from "../../hooks/useAuth";


const UserHome = () => {
    const {user} =useAuth()
    return (
        <div>
            <h2 className="text-3xl text-center mx-auto mt-7"><span className="mr-3">Hi,<span className="mr-3 text-amber-300 ml-3">Welcome</span>   
                {
                    user?.displayName? user.displayName :"Back"
                }
                </span></h2>
        </div>
    );
};

export default UserHome;