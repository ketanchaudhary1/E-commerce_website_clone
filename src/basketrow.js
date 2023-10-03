import axios from "axios";
import { useEffect, useState } from "react";

function BasketRow(params)
{
    let [product,setProduct]=useState({});
    function getProductDetails()
    {
        axios.get("https://api.webroot.net.in/products.php?pid="+params.id).then(reply=>{
            if(reply.status==200)
            {
                setProduct(reply.data);
            }
        });
    }
    useEffect(()=>{
        getProductDetails();
    },[]);
    return(
        <tr>
            <td>{product.pid}</td>
            <td>{product.pname}</td>
            <td>{product.details}</td>
            <td>Rs {product.price}.00/</td>
            <td><img src={product.photo} width='30px'/></td>
            <td>Remove</td>
        </tr>
    );
}
export default BasketRow;