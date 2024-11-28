import React from "react";
import "./Hero.scss"

const Hero = ({ title, desc, imgUrl }) => {
    return (
        <div className="hero_wrp" style={{ background: `url(${imgUrl}) no-repeat center` }}>
            <div className="container">
                <div className="hero_wrp_elems">
                    <h2>{title}</h2>
                    <b>{desc}</b>
                    <div className="hero_btns">
                        <button>Learn more</button>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero