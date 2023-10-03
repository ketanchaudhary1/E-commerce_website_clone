import axios from "axios";
import { useEffect, useState } from "react";
import addcart from './images/addtocart.jpg';
import { useParams } from "react-router-dom";
import { addInBasket, addInTotal } from "./action";
import { connect } from "react-redux";

function Products({commonData,addInTotal,addInBasket})
{
    let [pro,setPro]=useState([]);
    let parm=useParams();
    function loadCategories()
    {
        axios.get("https://api.webroot.net.in/products.php").then(reply=>
        {
            if(reply.status==200)
            {
                let arr=reply.data;
                if(parm.mid==undefined)
                {
                    setPro(arr);
                }
                else
                {
                    let arr1=arr.filter(e=>e.cid==parm.mid);                
                    setPro(arr1);
                }
            }
        });
    }
    function f1(id,price)
    {
        addInTotal(price);
        addInBasket(id);
    }
    useEffect(()=>{        
        loadCategories();
    },[]);
    return(
        <div className="row">
            {pro.map(e=>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{padding:"10px"}}>                
                <div style={{textAlign:'center'}}>
                    <img src={e.photo} /><br/>
                    {e.pname}<br/>
                    {e.details}<br/>
                    Rs {e.price} /-<br/>
                    <img src={addcart} onClick={()=>{f1(e.pid,e.price)}} style={{width:'150px',cursor:'pointer'}} />
                </div>
            </div>               
            )}
            

        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
let dispatchToStore=(dispatch)=>(
    {
        addInBasket:value=>dispatch(addInBasket(value)),
        addInTotal:value=>dispatch(addInTotal(value)),
    }
);
export default connect(connectToStore,dispatchToStore)(Products);