import { QueryClient, useQuery,dehydrate } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import Note from '../../components/Note'
import context from '../../context/Context'
import SerachBar from '../../components/SerachBar'

export default function SearchBarPage(props) {
    const SearchedNotes = useQuery(['UsersSearchedNotes'],()=>{
        return fetchUsersSearchedNotes(props.cookies.access,props.params.UsersQuery)
    })
    if(SearchedNotes.isError){
      
      return(
        
        <>
        <SerachBar token={props.cookies.access}/>
        <h1 className='my-20 flex justify-center'>{SearchedNotes.error.message}</h1>
        </>
        
      )
    }
    if(SearchedNotes.isLoading){
      return(
        <>
        <SerachBar token={props.cookies.access}/>
        <h1 className='my-20 flex justify-center'><BeatLoader/></h1>
        </>)
    }
    
  return (
    <div>
      <SerachBar token={props.cookies.access}/>
      {SearchedNotes.data.length===0?(
        <div className='mx-auto my-20 text-center'>
        <h1>We Have Found No Notes On Your Search <b>{props.params.UsersQuery}  </b></h1> 
        </div>
      ):(
        <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
      {SearchedNotes?.data.map((note)=>{
        return (
          <Note key={note.id} token={props.cookies.access} id={note.id} tag={note.tag} title = {note.title} desc={note.desc} datestamp = {note.datestamp} timestamp = {note.timestamp}/>
        )
      })}
    </div>
      )}
      
    </div>
  )
}

const fetchUsersSearchedNotes = (token,query) =>{
    return axios.get(`https://polynotes-django-backend.herokuapp.com/auth/v1/SearchedNotes/?search=${query}`,{
        headers:{
            Authorization:'Bearer ' + token
        }
    }).then((response)=>{
      return response.data
    })
}

export const getServerSideProps = async ({req,res,params}) =>{
  console.log(params);
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['UsersSearchedNotes'],()=>{
        return fetchUsersSearchedNotes(req.cookies.access,params.UsersQuery)
    })
    return {
        props:{
          dehydratedState:JSON.parse(JSON.stringify(dehydrate(queryClient))),
          cookies : req.cookies,
          params:params,
        }
      }
}