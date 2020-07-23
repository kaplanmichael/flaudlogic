import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ReactGA from 'react-ga';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li><NavLink to='/home' data-text="home">Home</NavLink></li>
                        <li><NavLink to='/blog' data-text="blog">Blog</NavLink></li>
                        <li><NavLink to='/about' data-text="about">About</NavLink></li>
                        <li><NavLink to='/media' data-text="media">Media</NavLink></li>
                        <li><NavLink to='/press' data-text="press">Press</NavLink></li>
                        <li><NavLink to='/links' data-text="links">Links</NavLink></li>
                    </ul>
                </nav>
              <span className="copyright">
                Reproduction of material from any flaudlogic.com page without written permission from the author is strictly prohibited.<br />
                ©2020 Copyright Michael D. Kaplan. All rights reserved.  Website layout by &nbsp;
                <ReactGA.OutboundLink
                  eventLabel="Gustavo Sazes"
                  to="https://gustavosazes.com/"
                  target="_blank"
                >
                  Gustavo Sazes
                </ReactGA.OutboundLink>
                . <br />
                  <Link to="/contact">Contact</Link>
              </span>
            </footer>
        );
    }

}
