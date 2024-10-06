import React from 'react'
import { useCart,useDispatchCart, } from '../components/ContextReducer'
import trash from "./asset/trash.png"

const Cart = () => {
    let data=useCart()
    let dispatch=useDispatchCart()
    if(data.length === 0){
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty !</div>
            </div>
        )
    }
    let totalPrice=data.reduce((total,food)=> total + food.price,0)
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'> 
      <table  className='table table-hover '>
      <thead className='fs-4 '>
      <tr >
      <th scope="col" style={{color:"rgba(25,135,84,1)",backgroundColor:"rgb(34,34,34)"}}>#</th> 
      <th scope="col" style={{color:"rgba(25,135,84,1)",backgroundColor:"rgb(34,34,34)"}}>Name</th> 
      <th scope="col" style={{color:"rgba(25,135,84,1)",backgroundColor:"rgb(34,34,34)"}}>Quantity</th>
      <th scope="col" style={{color:"rgba(25,135,84,1)",backgroundColor:"rgb(34,34,34)"}}>Option</th>
      <th scope="col" style={{color:"rgba(25,135,84,1)",backgroundColor:"rgb(34,34,34)"}}>Amount</th>
      <th scope="col" style={{color:"rgba(25,135,84,1)", backgroundColor:"rgb(34,34,34)"}}>Delete</th>
    </tr>
  </thead>
  <tbody> 
    {data.map((food,index)=>(
           <tr>
            <th scope="row" style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}>{index+1}</th>
            <td style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}>{food.name}</td>
            <td style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}>{food.qty}</td>
            <td style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}>{food.size}</td>
            <td style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}>{food.price}</td>
            <td style={{color:"#fff",backgroundColor:"rgb(34,34,34)"}}><button type="button" className='btn p-0'><img src={trash} style={{width:"44px",height:"44px", color:"#fff"}} alt="delete" onClick={()=>{dispatch({type: "REMOVE",index:index})}}/></button></td>
          </tr>
      
    ))}
  </tbody>
      </table>
      <div><h1 className='fs-3 mt-4'>TotalPrice - {totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-success mt-4 mb-4'> Check Out </button>
      </div>
        </div>
    </div>
  )
}

export default Cart
