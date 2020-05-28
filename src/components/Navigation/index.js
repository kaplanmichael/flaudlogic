import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
                <nav>
                    <ul>
                        <li><NavLink to='/home' className="home"><span>Home</span></NavLink></li>
                        <li><NavLink to='/about' className="about"><span>About</span></NavLink></li>
						            <li><NavLink to='/media' className="media"><span>Media</span></NavLink></li>
                        <li><NavLink to='/press' className="press"><span>Press</span></NavLink></li>
                        <li><NavLink to='/links' className="links"><span>Links</span></NavLink></li>
                        <li className="social"><img src={ require('../../images/art_nav_social.gif') } width={217} height={28} useMap="#default" className="social" alt=""/></li>
                    </ul>
                    <map name="default" id="default">
                        <area coords="0,0,66,30" href="http://www.youtube.com/user/FlaudLogic" alt="YouTube Channel" title="YouTube Channel" />
                        <area coords="76,0,100,28" href="http://news.flaudlogic.com/feeds/posts/default?alt=rss" target="_blank" alt="RSS" title="RSS" />
                        <area coords="136,0,217,30" href="http://twitter.com/flaudlogic" alt="Twitter" title="Twitter" />
                        <area coords="100,0,127,28" href="http://www.facebook.com/flaudlogic" alt="Facebook Page" title="Facebook Page"/>
                    </map>
                </nav>
        );
    }
}
