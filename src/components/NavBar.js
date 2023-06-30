import React, { Component } from 'react';
import "./NavBarStyle.css";

export class NavBar extends Component {
    state={clicked: false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <div>
        <nav className='NavbarItems'>
        <h2 className='logo'>
            <span>C</span>rypto
             <span>W</span>allet
        </h2>
        <div className='menu-icons' onClick={this.handleclick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
                <li><a href="/" className='nav-links'>
                    <i className="fa-solid fa-house-user"></i>Home</a>
                </li>
                <li><a href="/" className='nav-links'>
                    <i className="fa-solid fa-circle-user"></i>Info</a>
                </li>
                <li><a href="/" className='nav-links'>
                    <i className="fa-solid fa-briefcase"></i>Service</a>
                </li>
                <li><a href="/" className='nav-links'>
                    <i className="fa-solid fa-address-book"></i>Contact</a>
                </li>
                <li><a href="/" className='nav-links-mobile'>Sign up
                    </a>
                </li>
            </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar