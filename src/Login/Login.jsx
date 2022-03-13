import axios from 'axios'
import Joi from 'joi'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Google from '../Google Sign up/Google'



export default function Login(props) {
  let navigate = useNavigate()
  const [validate, setValidate] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email:'',
    password:''
  })

  function updateUser(e){
    let myuser = {...user}
    myuser[e.target.name] = e.target.value
    setUser(myuser);
  }
   async function SubmitLogin(e){
    e.preventDefault()
    setIsLoading(true)
   let respo =  ValidationForm(user)
   console.log(respo);
   if(respo.error){
      setValidate(respo.error.details)
    setIsLoading(false)
   }else {
    let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin' , user)

    if (data.message === 'success'){
      navigate('/');
      console.log(data.token);
      localStorage.setItem('userToken' , data.token);
      props.userToken();
    }else {
      setIsLoading(false)
      setError(data.message);
    }

  }
  }
  function ValidationForm(user){
    let schema = Joi.object({
      email : Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(/^[A-Z][a-z]{3,9}$/).required()
    })
    return schema.validate(user , {abortEarly:false})
  }


  return (
    <div>
      <Google/>
      <h2 className='my-3'>Login Now</h2>
      <form className='py-4' onSubmit={SubmitLogin}>
        {error? <div className="alert alert-danger">
          <strong>{error}</strong> 
        </div> : ''}

        {validate? validate.map((error , indx) => 
          error.path[0] === 'password' ? error.message = <div key={indx} className="alert alert-danger">
          <strong>Password Invalid</strong> 
        </div> :  <div key={indx} className="alert alert-danger">
          <strong>{error.message}</strong> 
        </div>) : ''}

        <label htmlFor="Email">Email :</label>
        <input onChange={updateUser} type="email" className='form-control my-3' name='email' id='email'/>

        <label htmlFor="Password">Password :</label>
        <input onChange={updateUser} type="password" className='form-control my-3' name='password' id='password'/>
        <button className='btn btn-outline-info'>
          {isLoading? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
          </button>
          
      </form>
    </div>
  )
}
