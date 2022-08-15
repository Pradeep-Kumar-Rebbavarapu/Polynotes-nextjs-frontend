import Input from './Input'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../styles/Home.module.css'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import TextArea from './TextArea';
import { toast } from 'react-toastify';
import {BeatLoader} from 'react-spinners'
import { GrClose } from "react-icons/gr";
import { QueryClient, useMutation ,useQueryClient} from '@tanstack/react-query';
import { useRouter } from 'next/router';
export default function UpdateNote(props) {
    const initialValues = { 
        title:"",
        tag:"",
        desc:""
    }

    const validationSchema = Yup.object({
        title:Yup.string().required('Atleast Any 1 Field Is Required').min(5,'Atleast 5 Characters Required'),
        tag:Yup.string().min(5,'Atleast 5 Characters Required'),
        desc:Yup.string().min(10,'Atleast 10 Characters Required')
    })
    const {mutate,isLoading} = useUpdateNote()
    const onSubmit = (values) =>{
        values['token'] = props.token
        values['noteid'] = props.noteid
        mutate(values)
        props.setIsOpen(false)
    }
  return (
    
    <div className='border-2  border-black p-5 w-fit  h-fit mx-auto my-auto'>
        <button onClick = {()=>{
            props.setIsOpen(false)
        }} className='border-2 border-black w-fit  p-1 rounded-md'>
      <GrClose/>  
      </button>
      <div className='z-[100] text-black w-fit h-fit mx-auto lg:mx-auto my-auto '>
            
                        <h1 className="sm:!text-3xl !text-2xl font-medium title-font my-4 text-black">Update Your Note</h1>
                       
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="p-2 md:w-1/2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="title" className={`leading-7 text-sm text-gray-900 `}>Title</label>
                                                        <Input labelclassName=" hidden" label="Title" name="title" id="title" type="text" className="w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 md:w-1/2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="tag" className={`leading-7 text-sm text-gray-900 `}>Tag</label>
                                                        <Input labelclassName=" hidden" type="text" id="tag" name="tag" label="Tag" className="w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label htmlFor="desc" className={`leading-7 text-sm text-gray-900 `}>Description</label>
                                                        <TextArea labelclassName="hidden" name="desc" label="Description" type="text" id="desc"  className="w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <button disabled = {formik.isValidating || !formik.errors} type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{isLoading?<BeatLoader/>:"Update Note"}</button>
                                                </div>

                                            </div>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>

                
    </div>
  )
}


const UpdateUsersNote = (notevalues) =>{
    axios.put(`https://polynotes-django-backend.herokuapp.com/auth/v1/RUDnote/${notevalues.noteid}/`,notevalues,{
        headers:{
            Authorization:'Bearer ' + notevalues.token
        }
    }).then((response)=>{
        response.data
    }).catch((response)=>{
        toast.error("Couldnt Update Note Try Again After Some time");
    })
}


const useUpdateNote = () =>{
    const router=  useRouter()
    const queryClient = useQueryClient();
	return useMutation(UpdateUsersNote, {
		onSuccess: () => {
			toast("Note Succesfully Updated", { position: toast.POSITION.TOP_LEFT });
			queryClient.invalidateQueries(["UsersNotes"]);
            router.push('/NotesPage')
            
		},
		onError: (context) => {
			
			toast.error("Couldnt Update Note Try Again After Some time");
			queryClient.setQueryData(["UsersNotes"], context.previousData);
		},
	});
}