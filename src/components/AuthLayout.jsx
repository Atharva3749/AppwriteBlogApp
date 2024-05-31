import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}){
    const navigate=useNavigate();
    const [loader,setLoader]=useState();
    const authStatus=useSelector((state)=>{ return state.auth; })
    useEffect(()=>{
        if(authentication&& authStatus !==authentication){
                navigate("/login")

        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
    },[authStatus,navigate,authentication])

  return loader ? <h1>Loading...</h1> :<>{children}</>
}

