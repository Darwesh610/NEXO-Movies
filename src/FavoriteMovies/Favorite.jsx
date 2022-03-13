import React, { useContext, useState } from 'react'
import { CounterContext } from '../CounterContext';
import './Favorite.css'

function Favorite() {
    let { FavData , dicrease } = useContext(CounterContext);
    const [data, setData] = useState(FavData)
    function RemoveFromFavorite (indx) {
        data.splice(indx , 1);
        setData(data)
        dicrease();
    }
return <> 
<div className="row g-3 m-4"> 
{data.length > 0 ? data.map((movie , indx) => <div key={indx} className="col-md-6">
        <div className='Con'>
            <div onClick={() => RemoveFromFavorite(indx)} className="layout">Click to remove from favorite .. </div>
            <img className='image-fav' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
           
        <h3 className='title-fav'>{movie.title}</h3>
            </div>
        </div> 
         )
    :<h1>You Don't Select your favorite Movies</h1>}
    </div>
</>

}

export default Favorite
