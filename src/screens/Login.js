import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Login = () => {
  const[credendtials,setCredendtials]=useState({email:"",password:""})
  let navigate=useNavigate()
  const handleSubmit =async(e)=>{
   e.preventDefault()
   const response=  await fetch("http://localhost:5000/api/getuser",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({email:credendtials.email,password:credendtials.password})
   })
   const json =await response.json()
   console.log(json);

   if(json.success){
        //  Save the auth token and redirect
    localStorage.setItem("authToken",json.authToken)
     navigate("/")
   }
   else alert("Enter valid credendtials")
   
  }
const onChange=(event)=>{
   setCredendtials({...credendtials,[event.target.name]:event.target.value})
}
  return (
    <div>
    <div className='container my-5 '>
    <h3 className='my-4'>Login</h3>
    <form onSubmit={handleSubmit} >
      
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" value={credendtials.email} aria-describedby="emailHelp"  onChange={onChange} />

      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">Password</label>
        <input type="password" className="form-control"  id="password" name="password"value={credendtials.password} minLength={5} required  onChange={onChange} />
      </div>
       
      <button type="submit" className="btn btn-success" >Submit</button>
      <Link to ="/signup" className="m-3 btn btn-danger">i'm a new user</Link>

    </form>
  </div>
</div>
)
}
  
export default Login
