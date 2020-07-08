import React from 'react';
import {NavLink} from 'react-router-dom';
import SocialMediaIcons from '../common/SocialMediaIcons';

export default class Navigation extends React.Component {
    render() {
        return (
                <nav>
                    <ul className="nav-items">
                        <li><NavLink to='/home' className="home"><span>Home</span></NavLink></li>
                        <li><NavLink to='/about' className="about"><span>About</span></NavLink></li>
						            <li><NavLink to='/media' className="media"><span>Media</span></NavLink></li>
                        <li><NavLink to='/press' className="press"><span>Press</span></NavLink></li>
                        <li><NavLink to='/links' className="links"><span>Links</span></NavLink></li>
                    </ul>
                    <SocialMediaIcons height={28}/>
                </nav>
        );
    }
}
