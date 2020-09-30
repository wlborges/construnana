import React from 'react';
import './styles.css'

import logo from '../../assets/logo.png';
export default function Home(){
    return(
        <div className="container">
            <img className="logo"src={logo} alt="logo-construnana"/>
            <h1 className="title">Site em manutenção.</h1>
        </div>

    );
}