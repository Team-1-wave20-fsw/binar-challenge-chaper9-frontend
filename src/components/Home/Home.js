import React from "react";
import './Home.css';

export default function Home() {

    return (
        <div className="container-fluid img">
            <div className="hero-main-info">
                <div class="p-5 text-center text-white bg-transparent" id="hero-main">
                    <h1 className="mb-3" id="heroTitle">PLAY TRADITIONAL GAME</h1>
                    <h4 className="mb-3" id="heroSubtitle">Selamat Datang Nurul</h4>
                    <a className="btn btn-warning" href="/list" role="button">PLAY NOW</a>
                </div>
                
                <div className="scroll-down-btn">
                    <p className="scroll-btn-text text-white text-center">The Story</p>
                </div>
            </div>
        </div>
    )
} 