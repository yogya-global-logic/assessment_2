import React, { useState } from "react";
import './Shopping.css'
import data from "../Data/data";
function Shopping(){
    console.log(data);
    const [arr,setArr] = useState(data);
    const SortYear=(e)=>{
        e.preventDefault();
        const sorteddata=[...arr]
        .sort((a,b)=>Number(a.year)-Number(b.year))
   
      setArr(sorteddata);
    }
    const SortName=(e)=>{
        e.preventDefault();
        const sorteddata=[...arr]
        .sort((a,b)=>a.title.localeCompare(b.title))
        setArr(sorteddata);
    
    }
    const SortAuthor=(e)=>{
        e.preventDefault();
        const sorteddata=[...arr]
        .sort((a,b)=>a.author.localeCompare(b.author))
        setArr(sorteddata);
    
    }
    const handleChange=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        let tempdata = data.filter(
            (item)=>item.title.toLowerCase().match(e.target.value.toLowerCase())
        )
        setArr(tempdata);

    }
    return(
        <div>
             
           
            <h1 id="e1" className="text-primary d-flex justify-content-center m-4" >Shopping</h1>
            <form className="d-flex justify-content-center g-2 align-items-center">
                    <div className="form-group mx-5">
                        <input type="text" onChange={(e)=>handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Author name"></input>
                    </div>
                    <div className="d-flex">
                    <h4 className="m-2"> Sort By: </h4>
                   
                    <button className="btn btn-primary m-2" onClick={(e)=>SortName(e)}>Title </button>
                     <button className="btn btn-primary m-2" onClick={(e)=>SortYear(e)}>Year</button>
                     <button className="btn btn-primary m-2" onClick={(e)=>SortAuthor(e)}>Author</button>
                     </div>
                    
                    {/* <button type="submit" className="btn btn-primary m-2">Submit</button> */}
                </form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            arr.map((item)=>(
            <div class="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.author}</h6>
                  <p className="card-text">{item.language}</p>
                  <p className="card-text">{item.year}</p>
                   
                
                </div>
            </div>
            </div>
            ))}
            </div>

        </div>
    )
}
export default Shopping;