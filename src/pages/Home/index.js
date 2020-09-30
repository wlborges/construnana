import React from 'react';
import './styles.css'

import img from '../../assets/logo.png';
export default function Home(){
    return(
        <div className="container">
            <div className="logo">
                <img className="imglogo" src={img} alt="logo"/>
                <div className="title">Site em Manutenção</div>
            </div>
        </div>

    );
}