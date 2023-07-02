import React, { useEffect, useState } from 'react'

function FavoriteColor(){
    
}

const Hooks = () => {
//     const[color, setColor] = useState("red");
//   return (
    
//         <>
//         <h1>My favorite Coloe is {color}!</h1>
//         <button type="button" onClick={() => setColor("blue")}>
//             Blue
//         </button>
//         <h1>My favorite Coloe is {color}!</h1>
//         <button type="button" onClick={() => setColor("red")}>
//             Red
//         </button>
//         <h1>My favorite Coloe is {color}!</h1>
//         <button type="button" onClick={() => setColor("yellow")}>
//             Yellow
//         </button>
//         </>
//   )

//     const[car, setCar] = useState(
//         {
//             brand: "toyota",
//             model: "Mustang",
//             year: "1945",
//             color: "red"
//         }

        
//     )
//     const updateColor = () => {
//         setCar(previousState => {
//             return {...previousState, brand:"Maruti", color: "blue"}
//         })
//     }
//     return (
//         <>
//         <h1>The model is {car.brand}</h1>
//         <h1>The model is {car.model}</h1>
//         <h1>The model is {car.year}</h1>
//         <button type='button' onClick={() => updateColor()}>The model is {car.color}</button>
//         </>
//     )
// }

//     const[count, setCount] = useState(0);

//     useEffect(() =>{
//             setTimeout(()=>{
//                     setCount(count => count + 1);
//                 }, 1000);
//             }, []);
//     return(
//         <>
//             <h1>The count is {count}</h1>
//         </>
//     )
// 
    const[count, setCount] = useState(0);
    const[calculation, setcalculation] = useState(0);

    useEffect(
        () =>{
            setcalculation(() =>count*2);
        }, [count]);

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={()=>{setCount( (c) => c + 1 ) }}>+</button>
        <p>Calculation: {calculation}</p>
        </>
    )

}


export default Hooks