import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Topbar.css'

function Topbar(props) {
    const user=false
    return (
        <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/"> HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/"> ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/"> CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write"> WRITE</Link></li>
            <li className="topListItem"><Link className="link" to="/"> {user && "LOGOUT"}</Link></li>
           
          </ul>
        </div>
        <div className="topRight">
          {user ? (<img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />):(
                <ul className="topList">
             <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
             <li className="topListItem"><Link className="link" to="/register"> Register</Link></li>
             </ul>
             ) }
              
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    )
}

export default Topbar
