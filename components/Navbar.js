import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo4.webp";
import { FaBars } from "react-icons/fa";
import OffCanvas from "./OffCanvas";
import context from "../context/Context";
import { AiFillCaretDown } from "react-icons/ai";
import { QueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Navbar(props) {
	
	let { user,setuser,Logout} = useContext(context);
	const SlideOpen = () => {
		let i = 0;
		let IntervalId = setInterval(function () {
			document.getElementById("offcanvas").style.width = String(i) + "px";

			i = i + 5;
			if (i > 250) {
				window.clearInterval(IntervalId);
			}
		}, 7);
	};
	
	
		
	const router = useRouter()
	
	
	return (
		<div className="border-b-4 border-black">
			<nav className="xl:grid h-fit grid-cols-[100px_auto_auto] justify-between flex  py-auto  bg-gradient-to-b from-gray-50 to-gray-300 w-full z-[-1]">
				<div
					id="logo"
					className="my-auto w-16 xl:mx-auto mx-4 pt-[7px] pb-[6px]"
				>
					<Image alt="loading..." placeholder="blur" className="rounded-xl" src={Logo}></Image>
				</div>
				<ul className="hidden xl:flex my-auto">
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link href="/">
							<a className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
								Home
							</a>
						</Link>
					</li>
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link href={user?"/NotesPage":"/Login"}>
							<a className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
								Your Notes
							</a>
						</Link>
					</li>
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link href="/Signup">
							<a className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
								Sign Up
							</a>
						</Link>
					</li>
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link suppressHydrationWarning href="/Login">
							{user?(
								<a onClick={Logout} suppressHydrationWarning className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
								Log Out
							</a>
							):(
								<a suppressHydrationWarning className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
									Login In
								</a>
							)}
							
						</Link>
					</li>
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link href="/About">
							<a className="hover:border-b-4 hover:border-rose-500 transition-all fade-in-out hover:tranisiton-all">
								About Us
							</a>
						</Link>
					</li>
					<li className="mx-4 my-4 p-1 font-medium text-[18px] text-rose-600 hover:text-rose-400  transition-all fade-in-out hover:tranisiton-all">
						<Link href="/Contact">
							<a className="hover:border-b-4 hover:border-rose-500">
								Contact Us
							</a>
						</Link>
					</li>
				</ul>
				
				<div id="openbtn" className="block xl:hidden border-2 my-auto mx-5">
					<button className="bg-gradient-to-tr from-gray-50 to-gray-400 hover:from-gray-50 hover:to-gray-200 transition-all hover:fade-in-out fade-in-out hover:transition-all bg-opacity-80 invert p-2 rounded-md">
						<FaBars className="w-8 h-8" onClick={SlideOpen} />
					</button>
				</div>
				<div className="hidden xl:flex ml-48 justify-end my-auto ">
					<div className={user?"mx-4 py-2 px-4 border-2 rounded-md border-black flex justify-start":null}>
						{user?(
							<div suppressHydrationWarning id="username" className="px-3  pb-2  rounded-full mr-5  text-3xl text-center bg-purple-500 text-white">{user?.username.slice(0,1)}</div>
						):(
							null
						)}
						

						<div className={user ? "z-10" : "hidden"}>
							<button
								onClick={() => {
									if (
										document.getElementById("dropdown").style.display ===
										"block"
									) {
										document.getElementById("dropdown").style.display = "none";
									} else {
										document.getElementById("dropdown").style.display = "block";
									}
								}}
								className="mt-2 border-2 border-black  p-1 rounded-md "
							>
								<AiFillCaretDown />
							</button>

							<div
								id="dropdown"
								className="hidden right-0 absolute my-7 bg-black text-white rounded-lg mx-3 h-[200px] w-[200px]  text-start p-2"
							>
								<div className="flex flex-wrap break-all border-b-2 border-white mb-2 pb-2">
									<div>
										<b>Username:</b> <span id="dropdown-username">{user?(user.username):(null)}</span>
									</div>
								</div>

								<div className="flex flex-wrap break-all border-b-2 border-white mb-2 pb-2">
									<div>
										<b>Email:</b> <span id="dropdown-email">{user?(user.email):(null)}</span>
									</div>
								</div>

								<div id="" className="flex flex-wrap break-all  mb-2 pb-2 ">
									<div>
										<b>Last Logged In On:</b>
										<div id="dropdown-date">{user?user.last_login_date:null}</div>
										<div id="dropdown-time">{user?user.last_login_time:null}</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</nav>

			<OffCanvas />
		</div>
	);
}


