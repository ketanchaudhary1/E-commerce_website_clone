import { Link } from 'react-router-dom';
import banner from './images/banner6.webp';
import logo from './images/p13.png';
import { connect } from 'react-redux';
function Header({commonData})
{
    function f1()
    {
        return(
            <>
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </>
        );
    }
    function f2()
    {
        return(
            <>
                <li className="nav-item active">
                    <Link className="nav-link" to="/profile">My Profile</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            </>
        );
    }
    return(
        <div>
            <img src={banner} width='100%' height='200px' />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={logo} width='25px' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>                    
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/basket">Basket</Link>
                </li>
                {commonData.islogin=="N"?f1():f2()}
                <li className="nav-item active">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>                
                </ul>                
            </div>
                Total Items: {commonData.pids.length}<br/>
                Cart Value:Rs {commonData.total}/-
            </nav>
        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
export default connect(connectToStore)(Header);