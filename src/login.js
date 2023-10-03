import axios from "axios";
import { setLogin, setMember } from "./action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login({commonData,setMember,setLogin})
{
    let nav=useNavigate();
    function doLogin()
    {
        let s1=document.getElementById("t1").value;
        let s2=document.getElementById("t2").value;
        axios.get("https://api.webroot.net.in/members.php?email="+s1+"&upass="+s2).then(reply=>{
            if(reply.data.status)
            {
                alert("Invalid Login/Password!!!");
            }
            else
            {
                setLogin("Y");
                setMember(reply.data);
                document.getElementById("t1").value="";
                document.getElementById("t2").value="";
                nav("/");
            }
        });
    }
    return(
        <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
        <div className="col-xl-6 col-lg-6 col-md-6 col-8">
            <div className="form-group">
                <label>Email</label>
                <input type="text" id="t1" placeholder="Enter Email Address" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" id="t2" placeholder="Enter Password" className="form-control"/>                
            </div>                        
            <input type="checkbox" id="c1" /> Remember Me
            <br/>
            <input type="button" onClick={doLogin} id="b1" value="Login" className="btn btn-primary" />
        </div>                
        <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
    </div>
    );
}
let connectToStore=(state)=>({commonData:state});
let dispatchToStore=(dispatch)=>(
    {
        setMember:value=>dispatch(setMember(value)),
        setLogin:value=>dispatch(setLogin(value)),
    }
);
export default connect(connectToStore,dispatchToStore)(Login);