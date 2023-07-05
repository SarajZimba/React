import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()

    const [posts, setPosts] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then(response=>setPosts(response.data))
        .catch(error=>console.log(error))
    }, [])
  return (
    <div className='m-5 p-5 shadow-lg rounded-5'>
       <h1>{posts.id} {posts.title}</h1>
        
    </div>
  )
}

export default Post