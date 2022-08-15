import React from 'react'
import Note from '../../components/Note'
import axios from 'axios';
import {
	dehydrate,
	QueryClient,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { useEffect } from 'react';
import AddNote from '../../components/AddNote';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import SerachBar from '../../components/SerachBar';


export default function NotesPage(props) {
    
    const UsersNotes = useQuery(['UsersNotes'],()=>{
        return fetchUsersNotes(props.cookies.access)
    })

    if(UsersNotes.isError){
      
      return(
        
        <>
        <SerachBar token={props.cookies.access}/>
        <h1 className='my-20 flex justify-center'>{UsersNotes.error.message}</h1>
        </>
        
      )
    }
    if(UsersNotes.isLoading){
      return(
      <>
      <SerachBar token={props.cookies.access}/>
      <h1 className='my-20 flex justify-center'><BeatLoader/></h1>
      </>)
    }

    
    
    return (
      <div className='z-[-1]'>
        <SerachBar token={props.cookies.access}/>
        <AddNote token={props.cookies.access}/>
      {UsersNotes.data.length===0?(
        <h1 className='my-20 flex justify-center'>You Have No Notes Yet</h1>
      ):(
        <div className='z-[-1]'>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
            {UsersNotes?.data.map((note)=>{
                return (
                    <>
                        <Note key={note.id} token={props.cookies.access} id={note.id} tag={note.tag} title = {note.title} desc={note.desc} datestamp = {note.datestamp} timestamp = {note.timestamp}/>
                    </>
                )
            })}
            </div>
                    
                        
                    
        </div >
      )}
      </div>
    )
}
const fetchUsersNotes = async (token) =>{
  try{
    return  axios.get('https://polynotes-django-backend.herokuapp.com/auth/v1/NoteAdd',{
      headers:{
        Authorization : "Bearer " + String(token),
      }
    }).then((response)=>{
      return response.data
    })
  }
  catch(error){
    return error
  }
    
  }
  
export const getServerSideProps = async ({req,res})=>{
    const queryClient = new QueryClient();
    // fetchUsersNotes(req.cookies.access)
    await queryClient.prefetchQuery(["UsersNotes"],()=>{
      return fetchUsersNotes(req.cookies.access)
    })
    return {
      props:{
        dehydratedState:JSON.parse(JSON.stringify(dehydrate(queryClient))),
        cookies : req.cookies,
      }
    }
  }