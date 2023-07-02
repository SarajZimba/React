import { Height } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext';

const Counter = () => {
    let [count, setCount] = useState(0);
    let [data, setData] = useState(50);

    const updateCount = e => {
        e.preventDefault()
        setCount(++count)
        console.log(count)
    }

    const updateData = e => {
        e.preventDefault()
        setData(data + 10)
        console.log(data)
    }

    //useEffect
    //to show sideeffects when a state variable is updated
    //useEfffect(fucntion, [dependency])
    //function: side effect to be seen
    //dependency: state variables that trigger the function
    //[var1, var2]: effect is seen when page loads or var1 or var2 is updated
    //[]: effecct is seen on page load
    //null: efffect is seen everytime any variable updates

    useEffect(() => {
        alert("count is updated")
    }, [count, data])


    let info = useContext(GlobalContext)
    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>
                Name:{info.name}
                Email: {info.email}
                <h3>Count: {count}</h3>
                {
                    count < 10 &&
                    <button onClick={updateCount} className='btn btn-info'> Increase count</button>
                }

                {
                    count > 0 &&
                    <button onClick={() => { return setCount(--count) }} className='btn btn-danger'> Decrease count</button>

                }

                {
                    count != 0 &&
                    <button onClick={() => { return setCount(0) }} className='btn btn-success'> Reset count</button>

                }

            </div>


            <div>Data: {data}</div>

            {
                data < 100 &&
                <button className="btn btn-info" onClick={() => { setData(data + 10) }}>increase</button>

            }

            {
                data > 50 &&
                <button className="btn btn-danger" onClick={() => { return setData(data - 10) }}>decrease</button>

            }

            {
                data != 50 &&

                <button className="btn btn-sucess" onClick={() => { setData(50) }}>reset</button>
            }

        </>

    )

}

export default Counter