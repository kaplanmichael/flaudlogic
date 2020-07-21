import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMediaIcons from '../common/SocialMediaIcons';
import { ReactComponent as HamburgerIcon } from '../../images/hamburger.svg';
import MobileLogo from '../../images/logo_fl_hdr_mobile.gif'

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        };
    }

    toggleNav() {
      this.setState({
        navOpen: !this.state.navOpen
      });
    }

    render() {
        return (
                <nav>
                  <NavLink to='/home'><img src={MobileLogo} /></NavLink>
                  <HamburgerIcon onClick={() => this.toggleNav()} />
                    <ul className={`nav-items ${this.state.navOpen ? '' : 'hidden'}`}>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
						            <li><NavLink to='/media'>Media</NavLink></li>
                        <li><NavLink to='/press'>Press</NavLink></li>
                        <li><NavLink to='/links'>Links</NavLink></li>
                    </ul>
                    <SocialMediaIcons />
                </nav>
        );
    }
}
