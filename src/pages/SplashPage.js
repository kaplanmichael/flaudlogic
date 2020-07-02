import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import SplashLayout from '../layout/SplashLayout';
import ReactGA from 'react-ga';
import SocialMediaIcons from '../components/common/SocialMediaIcons';
import SplashImage from '../images/art_fl_splash.jpg';

export default class SplashPage extends React.Component {
	render() {
        return (
            <SplashLayout>
							<section className="splash-container">
								<figure>
									<NavLink to='/home'>
										<img src={SplashImage} alt="Flaud Logic | The Official Webscape" />
									</NavLink>
									<figcaption>
										<h1>Enter Now</h1>
										<h4>The Official Webscape</h4>
										<div className="copyright">
											Reproduction of material from any flaudlogic.com page without written permission from the author is strictly prohibited.<br />
											©2018 Copyright Michael D. Kaplan. All rights reserved.  Website layout by &nbsp;
											<ReactGA.OutboundLink
												eventLabel="Gustavo Sazes"
												to="https://gustavosazes.com/"
												target="_blank"
											>
												Gustavo Sazes
											</ReactGA.OutboundLink>.
										</div>
										<aside className="social">
											<p>The Official Channels</p>
											<SocialMediaIcons height={20}/>
										</aside>
									</figcaption>
								</figure>
							</section>
            </SplashLayout>
        )
    }
}
