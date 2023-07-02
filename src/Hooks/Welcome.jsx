import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
    let params = useParams()
    // let n = params.name
    // let {name} = useParams()
  return (
    <div>
        Welcome, {params.name}
    </div>
  )
}

export default Welcome