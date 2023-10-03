import { connect } from "react-redux";

function Profile({commonData})
{
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
            <div className="col-xl-6 col-lg-6 col-md-6 col-8">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="t1" value={commonData.member.email}  placeholder="Enter Email Address" className="form-control"/>                    
                </div>                
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" id="t4" value={commonData.member.fname} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" id="t5" value={commonData.member.lname} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="number" id="t6" value={commonData.member.mobile} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea id="t7" className="form-control">{commonData.member.address}</textarea>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <label>
                    {commonData.member.country}
                        </label>                    
                </div>
                <div className="form-group">
                    <label>State</label>  
                    <label>{commonData.member.state}</label>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" id="t10" value={commonData.member.city} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Pin Code</label>
                    <input type="number" value={commonData.member.pincode} id="t11" className="form-control"/>
                </div>                
            </div>                
            <div className="col-xl-3 col-lg-3 col-md-3 col-2"></div>                
        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
export default connect(connectToStore)(Profile);