import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"



const Selfhelp = () => {
    const [data,setData]=useState([])
    axios.get("http://localhost:8000/data").then((res)=>{setData(res.data)})
  return (
    <>
        <div className="col-10 m-auto">
                <div className="row">
                {
                    data.slice(0,8).map((item,index)=>
                        
                                <div className="card" style={{width:"23%",padding:"0",margin:"10px",height:"61vh"}} key={index}>
                                <img src={item.img} style={{width:"100%",height:"70%"}} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <div className="d-flex justify-content-between">
                                <p className="card-text"><s>&#8377;{item.mrp}</s></p>
                                <p className="card-text">	&#8377;{item.price}</p>
                                </div>
                                <Link href="#" className="btn btn-primary" style={{width:"100%"}}>Add to Cart</Link>
                                </div>
                                </div>
                    )
                }
                </div>
                <div className="d-flex  justify-content-center m-5">
                  <Link to="selfhelpall"><button className="btn btn-success">View All</button></Link>
                </div>
        </div>
    </>
  )
}

export default Selfhelp
