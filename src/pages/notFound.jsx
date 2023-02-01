import React from 'react'
import { Link } from 'react-router-dom'

const notFound = () => {
  return (
    <div className="container py-5 error">
     <div>
     <h1 className="big-text text-center">404</h1>
     <p>Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</p>
     <Link to="" className='btn btn-primary d-end'>Start Shopping Now</Link>
    </div>
    </div>
  )
}

export default notFound