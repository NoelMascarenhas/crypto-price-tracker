import React from 'react'
import "./navbar.css"; 
import TemporaryDrawer from "./drawer.js"
import Button from '../Button/button.js';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className='navbar'>
            <h1 className='logo'>
                CryptoPriceTracker<span style={{color:"var(--yellow)"}}>.</span>
            </h1>
            <div className='links'>
                <Link to='/'>
                    <p className='link'>Home</p>
                </Link>
                <Link to='/watchlist'>
                    <p className='link'>Watchlist</p>
                </Link>
                <Link to='/dashboard'>
                    <Button outlined={true} text={"Dashboard"} onClick={()=>console.log("button clicked")}/>
                </Link>
            </div>
            <div className='drawer'>
                <TemporaryDrawer/>
            </div>
        </div>
    );
}

export default Navbar;