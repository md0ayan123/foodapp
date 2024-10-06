import  Modal from '../Modal'
import Cart from '../screens/Cart'
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useCart } from '../components/ContextReducer'

function Navbar() {
  let data=useCart()
 const[cartView,setCartView]=useState(false)
const navigate =useNavigate()

  const handleLogOut=()=>{
    sessionStorage.clear()
   
    navigate('/login')
   
  }


  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodEngine</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item">
          <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
          {/* <Link className="nav-link active fs-4" aria-current="page" to="/aboutus">about us</Link> */}
        </li>
        {(sessionStorage.getItem("authToken")) ?
        <li className="nav-item">
        <Link className="nav-link active fs-4" aria-current="page" to="/">MyOrder</Link>
      </li>
      : ""
        }
      </ul>
      {sessionStorage.getItem('authToken') ?
      <div className='d-flex gap-2'>
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
      </div>
      :
      <div>
        <div className='btn bg-white text-success mx-2'  onClick={()=>{setCartView(true)}}>My Cart <span className=" badge rounded-pill bg-danger" >
            {data.length}</span></div>
            {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal> : null}
        <button className='btn bg-danger text-white mx-2' onClick={handleLogOut}>logout</button>
      </div>
      }
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
