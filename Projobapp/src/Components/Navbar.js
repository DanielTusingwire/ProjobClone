import React, { Component } from 'react'
import "./Navstyle.css";
import { Menuitems } from './Menuitems';
import logo  from "../Assets/Logopro.svg"

class Navbar extends Component {

  render(){
  return (
  <>
  <nav className='Navbar'>
    <div className='logo-menuitem'>
    <img src={logo} className='logo'/>
    
    <ul className='navMenu'>
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