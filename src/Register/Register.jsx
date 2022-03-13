import axios from 'axios'
import Joi from 'joi'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Register() {
  let navigate = useNavigate()
  const [validate, setValidate] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
  })

  function updateUser(e){
    let myuser = {...user}
    myuser[e.target.name] = e.target.value
    setUser(myuser);
  }



   async function SubmitRegister(e){
    e.preventDefault()
    setIsLoading(true)
   let respo =  ValidationForm(user)
   console.log(respo);
   if(respo.error){
      setValidate(respo.error.details)
    setIsLoading(false)

   }else {
    let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup' , user)

    if (data.message === 'success'){
      let icon = document.getElementById('icon')
      console.log(icon);
      document.getElementById("butt").removeChild(icon);
      console.log(document.getElementById("butt"));
    console.log(data.message);
    navigate('/login')

    }else {
      setIsLoading(false)
      setError(data.message);
    }

  }
   }


  function ValidationForm(user){
    let schema = Joi.object({
      first_name : Joi.string().alphanum().max(10).min(2).required(),
      last_name : Joi.string().alphanum().max(10).min(2).required(),
      age : Joi.number().max(80).min(16).required(),
      email : Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(/^[A-Z][a-z]{3,9}$/).required()
    })
    return schema.validate(user , {abortEarly:false})
  }


  return (
    <div>
      <h2 className='my-3'>Register Now</h2>
      <form className='py-4' onSubmit={SubmitRegister}>
        {error? <div className="alert alert-danger">
          <strong>{error}</strong> 
        </div> : ''}

        {validate? validate.map((error , indx) => 
          error.path[0] === 'password' ? error.message = <div key={indx} className="alert alert-danger">
          <strong>Password Invalid</strong> 
        </div> :  <div key={indx} className="alert alert-danger">
          <strong>{error.message}</strong> 
        </div>) : ''}
      <label htmlFor="first_name">First Name :</label>
        <input onChange={updateUser} type="text" className='form-control my-3' name='first_name' id='first_name'/>

        <label htmlFor="Last_Name">Last Name :</label>
        <input onChange={updateUser} type="text" className='form-control my-3' name='last_name' id='last_name'/>

        <label htmlFor="Age">Age :</label>
        <input onChange={updateUser} type="number" className='form-control my-3' name='age' id='age'/>

        <label htmlFor="Email">Email :</label>
        <input onChange={updateUser} type="email" className='form-control my-3' name='email' id='email'/>

        <label htmlFor="Password">Password :</label>
        <input onChange={updateUser} type="password" className='form-control my-3' name='password' id='password'/>
        <button id='butt' className='btn btn-outline-info'>
          {isLoading? <i id='icon' className='fas fa-spinner fa-spin'></i> : 'Register'}
          </button>
      </form>
    </div>
  )
}
