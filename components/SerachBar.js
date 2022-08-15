import axios from "axios";
import {useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import context from "../context/Context";
export default function SerachBar(props) {
    const {setUsersQuery} = useContext(context)
    const router = useRouter()
    const handleSubmit = (e) =>{
        e.preventDefault()
        router.push(`/SearchBarPage/${e.target.search.value}`)
    }
    return (
        <div className=" justify-center text-center flex bg-black rounded-b-full  py-2">
            <form onSubmit={handleSubmit}  className="flex justify-center">
                <div>
                    <input name="search" id="search" type="text" className="lg:w-[500px] hover:invert md:w-full  bg-white  bg-opacity-100 rounded border-2 border-black focus:border-orange-500 ring-0 focus:bg-black focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 focus:text-white py-1 px-3 leading-8 transition-all duration-200 ease-in-out"
                        placeholder="Search Your Notes Here"
                        
                    />
                </div>
                <button type="submit" className="focus:ring-4 focus:ring-orange-500  hover:invert transition-all fade-in-out border-2 border-black p-3 bg-white text-black pt-[px] rounded-md mx-2">
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}


