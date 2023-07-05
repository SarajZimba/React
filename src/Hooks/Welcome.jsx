import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Welcome = () => {
    let params = useParams()
    // let n = params.name
    // let {name} = useParams()

    let myRef = useRef()
    myRef.current=0

    let navigate = useNavigate()

    const handleNavigate = () =>{
        navigate('/counter')
    }

    const increase = () => {
        myRef.current++;
        console.log(myRef.current)
    }
  return (
    <div>
        {myRef.current}
        <button className='btn btn-warning' onClick={increase}>Increase ref</button>
        Welcome, {params.name}
        Email, {params.email}
        <button className='btn btn-success' onClick={handleNavigate}>Click me</button>
    </div>
  )
}

export default Welcome