import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = (e) => {
const[credendtials,setCredendtials]=useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit =async(e)=>{
   e.preventDefault()
   const response=  await fetch("http://localhost:5000/api/createuser",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({name:credendtials.name,email:credendtials.email,password:credendtials.password,location:credendtials.geolocation})
   })
   const json =await response.json()
   console.log(json);

   if(!json.success){
    alert("Enter valid credendtials")
   }
  }
const onChange=(event)=>{
   setCredendtials({...credendtials,[event.target.name]:event.target.value})
}

  return (
    <div>
        <div className='container my-5 '>
        <h3 className='my-4'>Signup</h3>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={credendtials.name} aria-describedby="nameHelp"  onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credendtials.email} aria-describedby="emailHelp"  onChange={onChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-control"  id="password" name="password"value={credendtials.password} minLength={5} required  onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="cPassword1" className="form-label">Address</label>
            <input type="text" className="form-control"  id="cpassword" name="geolocation"  value={credendtials.geolocation}minLength={5} required  onChange={onChange} />
          </div>  
          <button type="submit" className="btn btn-success" >Submit</button>
          <Link to ="/login" className="m-3 btn btn-danger">Already a user</Link>

        </form>
      </div>
    </div>
  )
}

export default Signup

