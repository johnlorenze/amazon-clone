import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from './StateProvider';
import { Avatar } from '@material-ui/core';

function Header() {
    const [{ basket }] = useStateValue();
    const [toggleOverlay, setOverlay] = useState("");

    const openMenu = () => {
        setOverlay("header__navbarToggle");
    }

    const closeMenu = () => {
        setOverlay("");
    }

    return (

        <nav className="header">
            <div className={`header__overlay ${toggleOverlay}`}>
                <CloseIcon onClick={closeMenu} />
            </div>
            <div className={`header__navbar ${toggleOverlay}`}>
                <div className="header__navbarSignin">
                    <Link to="/login">
                        <Avatar />
                        <h4>Hello, Sign in</h4>
                    </Link>
                </div>
                <ul className="header__navList">
                    <li className="header__navListItem">
                        <Link to="/" onClick={closeMenu}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="header__navListItem">
                        <Link to="/" onClick={closeMenu}>
                            <span>Returns & Orders</span>
                        </Link>
                    </li>
                    <li className="header__navListItem">
                        <Link to="/" onClick={closeMenu}>
                            <span>Your Prime</span>
                        </Link>
                    </li>
                    <li className="header__navListItem">
                        <Link to="/" onClick={closeMenu}>
                            <span>Customer Service</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="header__logoContainer">
                <DehazeIcon className="header__mobile" onClick={openMenu} />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </Link>
            </div>

            <div className="header__search">
                <input
                    type="text"
                    placeholder="Search Amazon"
                    className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello,</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav >
    )
}

export default Header
