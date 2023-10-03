import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories()
{
    let [cat,setCat]=useState([]);
    function loadCategories()
    {
        axios.get("https://api.webroot.net.in/categories.php").then(reply=>
        {
            if(reply.status==200)
            {
                setCat(reply.data);
            }
        });
    }
    useEffect(()=>{
        loadCategories();
    },[]);
    return(
        <div className="row">
            {cat.map(e=>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{padding:"10px"}}>                
                <div style={{textAlign:'center'}}>
                    <img src={e.photo} /><br/>
                    {e.name}<br/>
                    {e.details}<br/>
                    <Link to={"/products/"+e.cid}>More Products</Link>
                </div>
            </div>               
            )}
            

        </div>
    );
}
export default Categories;