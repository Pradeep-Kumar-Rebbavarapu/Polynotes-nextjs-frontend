import React from 'react'
import Input from './Input'

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import { toast } from 'react-toastify';
import {BeatLoader} from 'react-spinners'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import TextArea from './TextArea';
export default function AddNote(props) {
    const initialValues = { 
        title:"",
        tag:"",
        desc:""
    }

    const validationSchema = Yup.object({
        title:Yup.string().required('Required').min(5,'Atleast 5 Characters Required'),
        tag:Yup.string().required('Required').min(5,'Atleast 5 Characters Required'),
        desc:Yup.string().required('Required').min(10,'Atleast 10 Characters Required')
    })
    const {mutate,isLoading,isFetching} = useAddNote()
    const onSubmit = (values) =>{
        values['token'] = props.token
        mutate(values)
    }

    
    
    return (
        <div className='border-2 w-fit h-fit lg:mx-auto m-10 bg-gradient-to-tr from-purple-600 to-rose-600 border-red-500 '>
            <section className="text-gray-200 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add Your Notes Under Our Clouds And Keep It Safe Behind Our HideOut.</p>
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <Input label="Title" name="title" id="title" type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <Input type="text" id="tag" name="tag" label="Tag" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                       
                                                        <TextArea name="desc" label="Description" type="text" id="desc"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <button disabled = {formik.isValidating || !formik.errors}  type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{isLoading?<BeatLoader/>:"Add Note"}</button>
                                                </div>

                                            </div>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>

                </div>
            </section>
        </div>
    )
}


const AddUsersNote = async (Noteobject) =>{
        
        return axios.post('https://polynotes-django-backend.herokuapp.com/auth/v1/NoteAdd/',Noteobject,{
        headers:{
            Authorization:'Bearer ' + String(Noteobject.token)
        }
    })
    
    
    
}

const useAddNote = () =>{

    const queryClient = useQueryClient()
    return useMutation(AddUsersNote,{
        onSuccess:()=>{
            
            toast('Note Added Succesfully',{position:toast.POSITION.TOP_LEFT})},
        
        onMutate:async (newData)=>{
            
            
            await queryClient.cancelQueries(['UsersNotes'])
            const previousData = queryClient.getQueryData(['UsersNotes'])
            queryClient.setQueryData(['UsersNotes'],(oldQueryData)=>{
                    return [...oldQueryData,newData]
                  
            
            
            })
            
            return {
                previousData
            }
        },
        onError:(_error,context)=>{
            
            
            queryClient.setQueryData(['UsersNotes'],context.previousData)
            toast.error('Note Couldnt Be Added Due To NetWork Error')
        },
        onSettled:()=>{
            
            queryClient.invalidateQueries(['UsersNotes'])
        }
    })
}



