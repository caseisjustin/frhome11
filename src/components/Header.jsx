import React from "react";
import "./Header.scss"
import { FaApple } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {

    return (
        <>
            <header>
                <div className="hdr_wrp">
                    <nav>
                        <div className="header_container">
                            <FaApple />
                            <ul className="nav_list">
                                <li>
                                    <a href="#">
                                        Store
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Mac
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        iPad
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        iPhone
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Watch
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Vision
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        AirPods
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        TV & Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Entertainment
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Support
                                    </a>
                                </li>
                            </ul>
                            <div className="srch_store">
                                <GoSearch />
                                <AiOutlineShopping />
                            </div>
                        </div>
                    </nav>
                    <div className="header_container">
                        <div className="hdr_hot">
                            <b>
                                Starting 11/29, get an Apple Gift Card up to $200 when you buy an eligible product — online and in-store.1 <a href="#">Learn more</a>
                            </b>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header