import React from 'react'
import {useParams } from 'react-router-dom'
export  function User(props) {
    
    const {userid} = useParams()

    return (
        <>
            <div 
            className='bg-gray-700 text-white p-4 text-3xl'
            >User : {userid} </div>
        </>
    )
}
