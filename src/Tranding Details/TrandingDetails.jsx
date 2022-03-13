import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import './TrandingDetails.css'



function TrandingDetails() {
    let { id }= useParams()
    const [mydata, setmyData] = useState([])


   async function getData(){
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=520a736bb3db32d936f05b2d361dee5c')
    setmyData(data.results);
    }

    useEffect(() => {
      getData();
    })
    function addFavorite() {
      let favDiv = document.getElementById('like');
      favDiv.classList.toggle('activeHeart');
    }
    // console.log(mydata);

    
  return (<>
          {mydata.length > 0 ? <div className="details-Con">
            <div className="row">
              <div className="image-Con col-md-6">
            <img src={`https://image.tmdb.org/t/p/original${mydata[id].backdrop_path}`} alt={mydata[id].title} />
            </div>
            <div className="col-md-6 desc-Con">
          <h1 className='title2'>{mydata[id].title}</h1>
        <p className='px-3 overview2'>{mydata[id].overview}</p>
        <div className="d-flex justify-content-between align-items-center w-75">
        <div className="vote2">
        <p className=''>{mydata[id].vote_average}</p>
        <i className="fa-solid fa-star"></i>
        </div>
        {mydata[id].adult? "" : <div className="adult2"><p>+18</p></div>}
        <div id='like' onDoubleClick={addFavorite} className="heart-Con">
        <i className="fa-solid fa-heart"></i>
        <small id='small' >Double Click to add Favorite</small>
        </div>
        </div>
        </div>
        </div>
          </div>
          : <div className="loading-Con">
        <div className="loading"></div>
        </div>}
      </>
  )
}

export default TrandingDetails