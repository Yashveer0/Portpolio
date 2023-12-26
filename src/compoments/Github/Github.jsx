import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(props) {
    // const data = useLoaderData()
    const [data , setData] = useState([])

    useEffect(()=>{
       fetch('https://api.github.com/users/yashveer0')
        .then((res)=> res.json())
        .then((data)=>{
           setData(data)
        })
    },[])

    return (
        <>
            <div 
            className='text-left font-bold flex-wrap text-black flex items-center justify-evenly m-4  text-2xl p-4'
            >   
                Github Name : {data.name}
                <br/> 
                Github Location : {data.location}
                <br/> 
                Github followers : {data.followers}
                <br />
                Github following : {data.following}
                <br />
                Github Bio : {data.bio}
                <br/>
                Github URL : {data.html_url}
                <br/> 
            <img className='rounded-md' src={data.avatar_url} title='Yash veer' alt="Git picture" width={300} />

            </div>
        </>
    )
}


// export  const githubInfoLodar = async ()=> {
//    const responce = await fetch('https://api.github.com/users/yashveer0')
//                 return responce.json()
// }