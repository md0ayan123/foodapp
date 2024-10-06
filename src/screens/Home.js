import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import pizza from './asset/pizza.jpg'
import biryani from './asset/biryani.jpg'
import burger from './asset/burger.jpg'



const Home = (props) => {

const[search,setSearch]=useState('')
const[fooditems,setFoodItems]=useState([])
const[foodCategory,setFoodCategory]=useState([])

const loadData=async()=>{
    let response= await fetch('http://localhost:5000/api/foodData',{
        method:"POST",
        header:{
        "Content-Type":"application/json"
        }
    })
    response=await response.json()
    setFoodItems(response[0])
    setFoodCategory(response[1])
    // console.log(response[0],response[1]);
}
   useEffect(()=>{
       loadData()
   },[])


    return (
        <div>
            <div><Navbar /></div>
            <div>
             <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
  <div className="carousel-inner" style={{maxHeight:"500px",maxWidth:"100%"}}>
    <div  className="carousel-caption" style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center" >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
    </div>
    <div className="carousel-item active">
      <img src={biryani} className="d-block w-100" style={{filter:"brightness(30%)",maxHeight:"500px",maxWidth:"100%",objectFit:"cover"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={burger} className="d-block w-100" style={{filter:"brightness(30%)",maxHeight:"500px",maxWidth:"100%",objectFit:"cover"}}alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pizza} className="d-block w-100"style={{filter:"brightness(30%)",maxHeight:"500px",maxWidth:"100%",objectFit:"cover" }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden" style={{color:"black"}}>Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden " style={{color:"black"}}>Next</span>
  </button>
</div>
</div>
            <div className='container'>
             {
             foodCategory.length > 0
                  ?( foodCategory.map((data)=>{
                    return(
                        <div className='row mb-3'>
                            <div key={data._id} className='fs-3 m-3 '>{data.CategoryName }</div>
                            <hr />
                            {fooditems.length > 0 ?
                             (fooditems.filter((items)=> (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                             .map((filterItems)=>{
                                return(
                        
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3" >
                                            <Card foodItem={filterItems}
                                            foodOptions={filterItems.options[0]}
                                            ></Card></div>
                                
                                    
                                )


                             }))  : "not found" }
                        </div>
                    )
                })) : <div>nothing</div>
             }
              
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home
