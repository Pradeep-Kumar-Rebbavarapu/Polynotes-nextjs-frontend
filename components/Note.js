import React from "react";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import {
	QueryClient,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import Modal from "react-modal";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import UpdateNote from "./UpdateNote";
import Router, { useRouter } from "next/router";
export default function Note(props) {
	let test = useDeleteNote();
	const handleDeleteNote = (noteid) => {
		
		const DeleteObjects = {
			noteid: noteid,
			token: props.token,
		};
		
		test.mutate(DeleteObjects);
    
	};
  
	const customStyles = {
		content: {
			height: "553px",
		},
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.75)",
		},
	};

	const [IsOpen, setIsOpen] = useState(false);
	return (
		<div scroll={false}>
			<div className="lg:p-10 p-8 bg z-[-1]">
				<div className="h-full  bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative bg-gradient-to-br from-orange-500 to-yellow-500">
					<div className="flex justify-between">
						<Tippy content={<span>Delete</span>}>
							<button
								onClick={() => {
									return handleDeleteNote(props.id);
								}}
								className="border-2 w-fit border-blue-500 h-fit p-1 rounded-md bg-white"
							>
								<MdDelete />
							</button>
						</Tippy>
						<Tippy content={<span>Update</span>}>
							<button  className="border-2 w-fit border-blue-500 h-fit p-1 rounded-md bg-white">
								<GrDocumentUpdate
									onClick={() => {
										setIsOpen(true);
									}}
								/>
								<Modal
									isOpen={IsOpen}
									onRequestClose={()=>{setIsOpen(false)}}
									contentLabel="My dialog"
									className="mymodal"
									overlayClassName="myoverlay"
									closeTimeoutMS={500}
								>
									<UpdateNote token={props.token} noteid = {props.id} setIsOpen={setIsOpen} />
								</Modal>
							</button>
						</Tippy>
					</div>

					<h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
						{props.tag}
					</h2>
					<h1 className="title-font sm:text-2xl text-xl  text-gray-900 mb-3 font-bold">
						{props.title}
					</h1>
					<p className="leading-relaxed mb-3 font-medium break-all">{props.desc}</p>

					<div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
						<span className="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-900 font-black">
							{props.datestamp}
						</span>
						<span className="text-white font-black inline-flex items-center leading-none text-sm ">
							{props.timestamp}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

const DeleteUserNote = (x) => {
	
	axios.delete(`https://polynotes-django-backend.herokuapp.com/auth/v1/RUDnote/${x.noteid}/`, {
		headers: {
			Authorization: "Bearer " + x.token,
		},
	}).then((response)=>{
    toast("Note Succesfully Deleted", { position: toast.POSITION.TOP_LEFT });
    return response.data
  }).catch((error)=>{
    toast.error('Couldnt Delete Note Try Again After Some time')
  })
};

const useDeleteNote = () => {
	const router = useRouter()
	const queryClient = useQueryClient();
	return useMutation(DeleteUserNote, {
		onSuccess: () => {
			
			queryClient.invalidateQueries(["UsersNotes"]);
			router.push('/NotesPage')
			
		},
		onError: (context) => {
			
			toast.error("Couldnt Delete Note Try Again After Some time");
			queryClient.setQueryData(["UsersNotes"], context.previousData);
		},
	});
};
