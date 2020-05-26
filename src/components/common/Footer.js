import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Footer.less';
export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li className="home"><NavLink to='/home'>Home</NavLink></li>
                        <li className="news"><NavLink to='/news' >News</NavLink></li>
						<li className="about"><NavLink to='/about'>About</NavLink></li>
                        <li className="media"><NavLink to='/media'>Media</NavLink></li>
                        <li className="press"><NavLink to='/press'>Press</NavLink></li>
                        <li className="links"><NavLink to='/links'>Links</NavLink></li>
                    </ul>
                </nav>
              <span className="copyright">
                Reproduction of material from any flaudlogic.com page without written permission from the author is strictly prohibited.<br />
                ©2018 Copyright Michael D. Kaplan. All rights reserved.  Website layout by Gustavo Sazes for <a
                  href="http://www.abstrata.net" target="_blank">abstrata.net</a>. <br />
                  <Link to="/contact">Contact</Link>
              </span>
            </footer>
        );
    }

}
