import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home.jsx'
import Movies from './Movies/Movies';
import About from './About/About';
import Network from './Network/Network';
import Login from './Login/Login';
import Register from './Register/Register';
import People from './People/People'
import Details from './Details/Details';
import TrandingDetails from './Tranding Details/TrandingDetails.jsx'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { CounterContextProvider } from './CounterContext';
import Favorite from './FavoriteMovies/Favorite';

function App() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null)

  function userToken(){
    let token = jwtDecode(localStorage.getItem('userToken'))
    setUserData(token);
  }

  function checkData() {
    if(localStorage.getItem('userToken')){
      userToken();
    }else{
        setUserData(null);
    }
  }
useEffect(() => {
}, [userData])

useEffect(() => {
  checkData();
},[])
  function logOut() {
    setUserData(null);
    localStorage.removeItem('userToken')
    navigate('/login')
  }
  function ProtectedRoute({children}){
      return !localStorage.getItem('userToken') ? <Navigate to='/login'/> : children;
  }


  return (
    <>
    <CounterContextProvider>
      <Navbar userData={userData} logOut={logOut}/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
        <Route path='about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path='trending' element={<ProtectedRoute><Network/></ProtectedRoute>}/>
        <Route path='search' element={<ProtectedRoute><People/></ProtectedRoute>}/>
        <Route path='favorite' element={<ProtectedRoute><Favorite/></ProtectedRoute>}/>
        <Route path='/details/:id' element={<ProtectedRoute><Details/></ProtectedRoute>}/>
        <Route path='/trendingdetails/:id' element={<ProtectedRoute><TrandingDetails/></ProtectedRoute>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
        <Route path='login' element={<Login userToken={userToken}/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      </div>
      </CounterContextProvider>
    </>
  );
}

export default App;
