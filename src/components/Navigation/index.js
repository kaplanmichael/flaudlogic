import React from 'react';
import {NavLink} from 'react-router-dom';
import SocialMediaIcons from '../common/SocialMediaIcons';

export default class Navigation extends React.Component {
    render() {
        return (
                <nav>
                    <ul className="nav-items">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
						            <li><NavLink to='/media'>Media</NavLink></li>
                        <li><NavLink to='/press'>Press</NavLink></li>
                        <li><NavLink to='/links'>Links</NavLink></li>
                    </ul>
                    <SocialMediaIcons height={28}/>
                </nav>
        );
    }
}
