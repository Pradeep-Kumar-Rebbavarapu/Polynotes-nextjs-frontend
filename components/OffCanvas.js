import Link from 'next/link'
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { GrClose } from "react-icons/gr";
import context from '../context/Context';
export default function OffCanvas() {
  const {user,Logout} = useContext(context)
  const SlideClose = () =>{
    let i=250
    let IntervalId = setInterval(function(){
      document.getElementById('offcanvas').style.width = String(i) + "px"
      
      i = i-5
      if(i<0){
        window.clearInterval(IntervalId)
      }
    },7)
  }
  return (
    <div id="offcanvas" className='fixed w-0  top-0 right-0 xl:hidden overflow-scroll pb-10  z-10  h-screen bg-black text-white'>
      <button onClick={SlideClose} className='bg-white m-3 p-2 rounded-md bg-opacity-80 hover:bg-opacity-100 '><GrClose /></button>
      <div  className='p-5 py-0'>
      <h1 className='text-3xl font-bold pb-5 text-center'>PolyNotes</h1>
      {user?(
        <div suppressHydrationWarning className='border-2 mb-4 border-white py-5'>
        <div suppressHydrationWarning className='text-center bg-rose-500 border-2 border-white w-fit h-fit px-4 py-2 mx-auto rounded-full font-bold text-2xl'>{user?.username.slice(0,1)}</div>
        <div suppressHydrationWarning className='break-all text-center p-2'>{user?.username}</div>
        <div suppressHydrationWarning className='break-all text-center p-2'>{user?.email}</div>
        <div suppressHydrationWarning className='text-center break-all p-2'><b>Last Logged In On:</b><p suppressHydrationWarning>{user?.last_login_date}</p> <p suppressHydrationWarning>{user?.last_login_time}</p></div>
    </div>
      ):(
        null
      )}
        
        
        <ul>
          <li className='px-2 py-4 border-b-2 border-t-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/NotesPage"><a>Your Notes</a></Link>
          </li>
          <li className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/Signup"><a>Sign Up</a></Link>
          </li>
          {user?(
            <li onClick={Logout} className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <a>Log Out</a>
          </li>
          ):(
            <li className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/Login"><a>Log in</a></Link>
          </li>
          )}
          <li className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/About"><a>About Us</a></Link>
          </li>
          <li className=' px-2 py-4 border-b-2 hover:bg-indigo-600 transition-all hover:transition-all'>
            <Link href="/Contact"><a>Contact Us</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
