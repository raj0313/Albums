import React, { useState } from 'react';
import axios from 'axios';
import { getAlbum, getUser,getThumbnails} from './url';
const fetchData = async ()=> {
    return await axios.get(getAlbum)
    .then((response)=>{
       
        
    return response
        
    }).catch(function(err){
        console.log(err)
    })
 }

 const fetchUser = async ()=> {
    return await axios.get(getUser)
    .then((response)=>{
       
        return response
        
    }).catch(function(err){
        console.log(err)
    })
 }


 const fetchImages = async () =>{
     return await axios.get(getThumbnails)
     .then((response)=>{
                return response
     }).catch(function(err)
     {
         console.log(err)
     })
 }
export const getAlbums = {
    fetchData,
    fetchImages,
    fetchUser
};

