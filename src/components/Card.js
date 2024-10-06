import React,{useEffect, useState,useRef} from 'react'
import { useDispatchCart,useCart } from './ContextReducer'

const Card = (props) => {
    let dispatch=useDispatchCart();
    let data=useCart()
    let priceRef=useRef()
    let options=props.foodOptions
    let priceOptions=Object.keys(options)
    
    const [qty,setQty]=useState(1)
    const [size,setSize]=useState("")
 
    const handleAddToCart=async()=>{
        await dispatch({type:"ADD" , id:props.foodItem._id, name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
        console.log(data);
    } 
        
        let finalPrice =qty *  parseInt(options[size])
        useEffect(()=>{
                 setSize(priceRef.current.value)
        },[])
    return (
        <div>
            <div>
                <div className="card mx-5 my-5" style={{ width: "18rem" }}>
                    <img src={props.foodItem.img} className="card-img-top" style={{height:"325px",borderRadius:"23px", border:"1px solid black", maxWidth:"100%", objectFit:"fill"}} alt="..."   />
                    <div className="card-body">
                        <h5 className="card-name">{props.foodItem.name}</h5>
                        <p className="card-text">{props.foodItem.description}</p>
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success rounded" id="" onChange={(e) =>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )

                            })}
                        </select>
                        <select className="m-2 h-100  bg-success rounded" id="" ref={priceRef} onChange={(e) =>setSize(e.target.value)}  >
                          {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                          })}
                        </select>
                        <div className='d-inline fs-5'> ₹{finalPrice}/-</div>
                    </div>
                    {/* <hr></hr> */}
                    <button className='btn bg-success justify-center fs-5' onClick={handleAddToCart}>Add To Cart
                    
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
