import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);
 const AuthProvider = ({ children }) => {
const [user,setUser]=useState(null)
const [loading,setLoading] =useState(true)
const googleProvider = new GoogleAuthProvider();
const axiosPublic =useAxiosPublic()
// step1 : user create 

const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

}

// step-2: sign in User

const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// step-3 : logout user 
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

// step 4: Profile Update 

const profileUpdate=(name,photo)=>{
    return updateProfile (auth.currentUser,{
        displayName : name ,photoURL:photo
    })
}

// step-5: google popUp 
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        // console.log('current User', currentUser);
        
        // set accessToken 
        const userInfo={email:currentUser.email}
    axiosPublic.post('/jwt',userInfo)
    .then(result =>{
        if(result.data.token){
            localStorage.setItem('access-token',result.data.token)
        }
        else{
            localStorage.removeItem('access-token')
        }
    })
        setLoading(false)
    })
    return ()=>{
        return unSubscribe()
    }
},[axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        profileUpdate,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;