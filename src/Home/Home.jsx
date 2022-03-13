import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


export default function Home() {

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="row g-5 my-5 w-100 h-100">
        <div className="col-md-6">
          <Link to={'/trending'}> <div className="tranding d-flex justify-content-center align-items-center"><h1>Trending</h1></div> </Link>
        </div>
        <div className="col-md-6">
        <Link to={'/movies'}> <div className="tranding d-flex justify-content-center align-items-center"><h1>Movies</h1></div> </Link>
        </div>

      </div>
    </div>
  )
}
