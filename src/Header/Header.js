import React, {Component} from 'react';
import Logo from '../assets/logo.png';
import BkgImage from '../assets/header-background.jpg';
import './Header.scss';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    state = {
        condition: false
    }

    mobileTogglerHandler () {
        if (this.state.condition === false) {
            this.setState({condition:true});
        } else {
            this.setState({condition:false});
        }
    }

    hideMobileMenuHandler = ()=> {
        this.setState({condition:false})
    }

    render() {

    return (
    <header>
        <div className="hero-wrapper">
            <div className="logo-menu-wrapper">
                <div className="logo">
                    <img src={Logo} alt="UpShot Logo"></img>
                </div>
                <div className="mobile-toggler" onClick={this.mobileTogglerHandler.bind(this)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={(this.state.condition === true ? 'nav-show' : '')}>
                    <ul>
                        <li onClick={this.hideMobileMenuHandler}><NavLink to={'/'} exact>Home</NavLink></li>
                        <li onClick={this.hideMobileMenuHandler}><NavLink to={'/about/'}>About</NavLink></li>
                        <li onClick={this.hideMobileMenuHandler}><NavLink to={'/products/'}>Products</NavLink></li>
                        <li onClick={this.hideMobileMenuHandler}><NavLink to={'/help/'}>Help</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header-overlay"></div>
            <div className="background-image" style={{backgroundImage: `url(${BkgImage})`}}></div>
            <div className="header-title">
            <h1>THIS IS A HEADLINE</h1>
            </div>
        </div>
    </header>
    )
    }
}

export default Header;