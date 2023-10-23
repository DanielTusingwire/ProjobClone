import React, { Component } from 'react'
import "./Navstyle.css";
import { Menuitems } from './Menuitems';
import logo  from "../Assets/Logopro.svg"

class Navbar extends Component {
  state = {clicked: false};
  handleClick = ()=>{
      this.setState( {clicked: !this.state.clicked})
  }

  render(){
  return (
  <>
  <nav className='Navbar'>
    <div className='logo-menuitem'>
    <img src={logo} className='logo'/>

    <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>

                </div>
    
    <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
      { Menuitems.map((items, index) =>{
        return(
          <li key={index}>
          <a href={items.url}>{items.title}</a>
          </li>
        )

      })
       
      }



    </ul>
    </div>

    <div className='btns'> 

    <button className='btns1'>
    Free Resume Guide
      </button>
    
      </div>

    

  </nav>
  
  
  </>


  );
}
}

export default Navbar;