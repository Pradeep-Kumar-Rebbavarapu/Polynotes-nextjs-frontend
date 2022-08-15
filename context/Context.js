import React, { useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const context = createContext()

export default context


export const ContextProvider = ({children}) =>{
    const [user,setuser] = useState(Cookies.get('user_details')?JSON.parse(Cookies.get('user_details')):null)
    const [authtoken,setauthtoken] = useState()
    // console.log('user',user);
    const [UsersQuery,setUsersQuery] = useState(null)
    const router = useRouter()
    const Logout = () =>{
		setuser(null)
		Cookies.remove('user_details')
		Cookies.remove('access')
		Cookies.remove('refreh')
		localStorage.clear()
		
        axios.get('/api/auth/Logout').then((response)=>{
            router.push('/Login')
            toast('Logged Out Succesfully',{position:toast.POSITION.TOP_LEFT})
        })
		
	}
    const contextData = {
        user:user,
        setuser:setuser,
        authtoken:authtoken,
        setauthtoken:setauthtoken,
        Logout:Logout,
        UsersQuery:UsersQuery,
        setUsersQuery:setUsersQuery,
    }
    return (
        <context.Provider value={contextData}>
            {children}
        </context.Provider>
    )
}