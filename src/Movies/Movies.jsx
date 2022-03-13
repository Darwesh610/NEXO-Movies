import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../CounterContext'
import './Movies.css'


export default function Movies(){
  let { increase } = useContext(CounterContext);
const [data, setData] = useState([])

let getData = async () => {
    let {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=520a736bb3db32d936f05b2d361dee5c")
    setData(data.results);
}


useEffect(() => {
  getData();
}, [])




    return (
      <>
            <div className='row my-5 px-5 g-5'>
        {data.length > 0 ? data.map((movie , indx) => <div key={indx} className="col-md-4">
        <Link className='link' to={`/details/${indx}`}><div className='card-movie'>
            <img className='w-100 mb-4 img' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
        <h3 className='px-3 title'>{movie.title}</h3>
        {movie.adult? "" : <div className="adult"><p>+18</p></div>}
        <p className='px-3 overview'>{movie.overview}</p>
        <div className="vote">
        <p className='px-3'>{movie.vote_average}</p>
        <i className="fa-solid fa-star"></i>
        </div>
    
        </div>
        </Link>
        <button id={`keyMovies${indx}`} className='butt' onClick={() => increase(movie , indx , 'Movies')}><i className="fa-solid fa-heart"></i>Favorite</button>
        </div>
        ) : <div className="loading-Con">
        <div className="loading"></div>
        </div>}
      </div>
      </>
    )
  
}
