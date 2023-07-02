import React, { useContext } from 'react'
import { GlobalContext, GlobalContextProvider } from './GlobalContext'

const ComponentA = ({name,email, phone})=>{
// const ComponentA = (props) => {
//     const {name, email, phone} = props
let data = useContext(GlobalContext)
  return (
    
    <>
        <h1>Hello {data.name}</h1>
        <h1>Welcome {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Phone: {phone}</h1>
    </>
  )
}

export default ComponentA