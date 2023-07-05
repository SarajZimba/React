import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Count = () => {
    let countStore = useSelector(store=>store)
    let count = countStore.count


    let dataStore = useSelector(data=>data)
    let data = dataStore.data

    // let {count} = useSelector(store=>store)

    // let count = useSelector(store=>store.count)

    let dispatch = useDispatch()

  return (


    <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>

        <h1>Count: {count} </h1>
        <h1>Data: {data} </h1>

        <div className="btn-group">
            <button className="btn btn-success" onClick={()=>{return dispatch({type:"INCREASE"})}}>Increase</button>
            <button className="btn btn-info" onClick={()=>{return dispatch({type:"DECREASE"})}}>Decrease</button>
            <button className="btn btn-primary" onClick={()=>{return dispatch({type:"RESET"})}}>Reset</button>


            
        </div>
        <div className="btn-group">
            <button className="btn btn-success" onClick={()=>{return dispatch({type:"INCREASE_DATA"})}}>Increase</button>
            <button className="btn btn-info" onClick={()=>{return dispatch({type:"DECREASE_DATA"})}}>Decrease</button>
            <button className="btn btn-primary" onClick={()=>{return dispatch({type:"RESET_DATA"})}}>Reset</button>
        </div>
    </div>

  )
}

export default Count