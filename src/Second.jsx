import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <>
    <div>This is a Second PAge</div>
    <Link to='/first'>Go to first page</Link>
    </>
  )
}

export default Second