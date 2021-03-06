import React, { useContext } from "react";
import sprites from "../img/sprites.svg";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Nav() {
    const { lightMode, setLightMode } = useContext(ThemeContext);

    const handleClick = () => {
        setLightMode(!lightMode);
    };

    return (
        <nav className={lightMode ? "nav lightModeNav lightMode" : "nav"}>
            <div className="container">
                <h1 className="nav__logo">Where in the world?</h1>
                <button className="nav__theme" onClick={handleClick}>
                    <svg className="icon">
                        <use href={`${sprites}#icon-moon`}></use>
                    </svg>
                    Dark Mode
                </button>
            </div>
        </nav>
    );
}
