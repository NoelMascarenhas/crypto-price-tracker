import React from 'react'
import "./navbar.css"; 
import TemporaryDrawer from "./drawer.js"
import Button from '../Button/button.js';

function Navbar(){
    return (
        <div className='navbar'>
            <h1 className='logo'>
                CryptoPriceTracker<span style={{color:"var(--yellow)"}}>.</span>
            </h1>
            <div className='links'>
                <a href='/'>
                    <p className='link'>Home</p>
                </a>
                <a href='/'>
                    <p className='link'>Compare</p>
                </a>
                <a href='/'>
                    <p className='link'>Watchlist</p>
                </a>
                <a href='/'>
                    <Button outlined={true} text={"Dashboard"} onClick={()=>console.log("button clicked")}/>
                </a>
            </div>
            <div className='drawer'>
                <TemporaryDrawer/>
            </div>
        </div>
    );
}

export default Navbar;