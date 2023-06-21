// import React from 'react'

// export default function First() {
//   return (
//     <div>First</div>
//   )
// }

// import React from 'react'

// function First() {
//   return (
//     <div>First</div>
//   )
// }

// export default First

// import React from 'react'

// export const First = () => {
//   return (
//     <div>First</div>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>
    <h1 style={{backgroundColor: "blue", color:"yellow"}}>This is heading</h1>
    <div>First</div>
    <Link to= '/second'>Go to second Page</Link>
    </>
  )
}

export default First

