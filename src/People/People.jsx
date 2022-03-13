import axios from 'axios'
import React, {  useContext, useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../CounterContext';

export default function All() {
  let { increase } = useContext(CounterContext);
  const [mydata, setData] = useState([])
  const [searchValue, setSearch] = useState('all')
  
async function getData() {
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=520a736bb3db32d936f05b2d361dee5c&query={${searchValue}}`)
    setData(data.results);
}

useEffect(() => {
  getData();
})



function Search(e){
  console.log(e.target.value);
  if(e.target.value){
    setSearch(e.target.value)
    getData();
  }else {
    setSearch('all')
    getData();
  }

}


    return (
      <>
          <input type='text' className='form-control my-5' placeholder='Search...' onChange={Search}/>
            <div className='row my-5 px-5 g-5'>
        {mydata.length > 0 ? mydata.map((movie , indx) => <div key={indx} className="col-md-3">
        <Link className='link' to='/details'><div onClick={() => this.getDetails(indx)} className='card-movie'>
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
        <button id={`keySearch${indx}`} className='butt' onClick={() => increase(movie , indx , 'Search')}><i className="fa-solid fa-heart"></i>Favorite</button>
        </div>
        ) : <div className="loading-Con">
        <div className="loading"></div>
        </div>}
      </div>
      </>
    )
  };
