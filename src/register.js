import axios from "axios";
import { useEffect, useState } from "react";
import blank from './images/blank.jpg';
import prg from './images/progress1.gif';
import { useNavigate } from "react-router-dom";
function Register()
{
    let [country,setCountries]=useState([]);
    let [states,setStates]=useState([]);
    let [msg,setMsg]=useState('');
    let [im,setIm]=useState(blank);
    let [clrUpr,setclrUpr]=useState('red');
    let [clrlwr,setclrlwr]=useState('red');
    let [clrSpe,setclrSpe]=useState('red');
    let [clrDig,setclrDig]=useState('red');
    let [clrLen,setclrLen]=useState('red');
    let nav=useNavigate();
    function setButtonState(event)
    {
        let chk=event.target;
        document.getElementById("b1").disabled=!chk.checked;
    }
    function getStates(event)
    {
        let s=event.target.value;
        axios.get("https://api.webroot.net.in/states.php?isoname="+s).then(reply=>{
            if(reply.status==200)
            {
                setStates(reply.data);
            }
        });
    }
    function loadCountries()
    {
        axios.get("https://api.webroot.net.in/countries.php").then(reply=>{
            if(reply.status==200)
            {
                setCountries(reply.data);
            }
        });
    }
    async function checkEmail(event)
    {
        let s=event.target.value;
        setIm(prg);
        setMsg("");
        await axios.get("https://api.webroot.net.in/checkmember.php?email="+s).then(reply=>
        {
            if(reply.status==200)
            {
                if(reply.data.status=="Yes")
                {
                    setMsg("This Email Already Exists!!!");
                }
                else
                {
                    setMsg("");
                }
            }
        });
        setIm(blank);
    }
    function checkPassword(event)
    {
        let s=event.target.value;
        setclrDig('red');
        setclrLen('red');
        setclrSpe('red');
        setclrUpr('red');
        setclrlwr('red');
        if(s.length>=6) setclrLen('green');
        for(let i=0;i<s.length;i++)
        {
            let c=s.substring(i,i+1);
            if(c>='A' && c<='Z')
            {
                setclrUpr('green');
                break;
            }
        }
        for(let i=0;i<s.length;i++)
        {
            let c=s.substring(i,i+1);
            if(c>='a' && c<='z')
            {
                setclrlwr('green');
                break;
            }
        }
        for(let i=0;i<s.length;i++){
            let c=s.substring(i,i+1);
            if(c>='33' && c<='47')
            {
                setclrSpe('green');
                break;
            }
        }
        for(let i=0;i<s.length;i++)
        {
            let c=s.substring(i,i+1);
            if(c>='0' && c<='9')
            {
                setclrDig('green');
                break;
            }
        }

    }
    function doRegister()
    {
        let s1=document.getElementById("t1").value;
        let s2=document.getElementById("t2").value;
        let s3=document.getElementById("t3").value;
        let s4=document.getElementById("t4").value;
        let s5=document.getElementById("t5").value;
        let s6=document.getElementById("t6").value;
        let s7=document.getElementById("t7").value;
        let s8=document.getElementById("t8").value;
        let s9=document.getElementById("t9").value;
        let s10=document.getElementById("t10").value;
        let s11=document.getElementById("t11").value;
        // Apply Checks
        
        //---------
        let obj={email:s1,upass:s2,fname:s4,lname:s5,mobile:s6,address:s7,country:s8,state:s9,city:s10,pincode:s11};
        let json=JSON.stringify(obj);
        axios.post("https://api.webroot.net.in/members.php",json).then(reply=>{
            if(reply.status==200)
            {
                if(reply.data.status=="OK")
                {
                    alert("You have Registered Sucessfully");
                    clearData();
                    nav("/products");
                }
                else
                {
                    alert("Some Error!!!");                    
                }
            }
        });
    }
    function clearData()
    {
        document.getElementById("t1").value="";
        document.getElementById("t2").value="";
        document.getElementById("t3").value="";
        document.getElementById("t4").value="";
        document.getElementById("t5").value="";
        document.getElementById("t6").value="";
        document.getElementById("t7").value="";
        document.getElementById("t10").value="";
        document.getElementById("t11").value="";
    }
    useEffect(()=>{
        loadCountries();
    },[]);
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
            <div className="col-xl-6 col-lg-6 col-md-6 col-8">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="t1" onBlur={checkEmail} placeholder="Enter Email Address" className="form-control"/>
                    <div style={{color:'red'}}>{msg} <img src={im} height="20px" /></div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" id="t2" onKeyUp={checkPassword} placeholder="Enter Password" className="form-control"/>
                    <div style={{color:clrUpr}}>At Least 1 Upper Case Character</div>
                    <div style={{color:clrlwr}}>At Least 1 Lower Case Character</div>
                    <div style={{color:clrDig}}>At Least 1 Digit</div>
                    <div style={{color:clrSpe}}>At Least 1 Special Character</div>
                    <div style={{color:clrLen}}>Min Length 6</div>
                </div>
                <div className="form-group">
                    <label>Re Password</label>
                    <input type="text" id="t3" placeholder="Enter Password Again" className="form-control"/>                  
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" id="t4" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" id="t5" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="number" id="t6" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea id="t7" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <select id="t8" onChange={getStates} className="form-control">
                        {country.map(e=>
                            <option value={e.isoname}>{e.cname}</option>
                            )}
                    </select>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <select id="t9" className="form-control">
                        {states.map(e=>
                            <option>{e.sname}</option>
                            )}
                    </select>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" id="t10" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Pin Code</label>
                    <input type="number" id="t11" className="form-control"/>
                </div>
                <br/>
                <input type="checkbox" onChange={setButtonState} /> I Agrees with all Terms & Conditions
                <br/>
                <input type="button" onClick={doRegister} id="b1" value="Register" className="btn btn-primary" />
            </div>                
            <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
        </div>
    );
}
export default Register;