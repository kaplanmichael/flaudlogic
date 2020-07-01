import React from 'react';
import {Link} from 'react-router-dom';
import SplashLayout from '../layout/SplashLayout';
import ReactGA from 'react-ga';

export default class SplashPage extends React.Component {
	render() {
        return (
            <SplashLayout>
							<section className="splash-container">
								<figure>
									<img src={ require('../images/art_fl_splash.jpg') } width={700} height={632} useMap="#splash" alt="Flaud Logic | The Official Webscape" />
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
									</figcaption>
								</figure>

								<map name="splash" id="splash">
									<Link to="/home">
										<area alt="" coords="77,65,624,413"/>
									</Link>
									<Link to="/home">
										<area alt="" coords="162,413,530,485" />
									</Link>
									<area coords="376,553,424,577" href="http://www.youtube.com/user/FlaudLogic" target="_blank" alt="YouTube Channel" title="YouTube Channel" rel="noopener noreferrer"/>
									<area coords="477,553,544,577" href="http://twitter.com/flaudlogic" target="_blank" alt="Twitter" title="Twitter" rel="noopener noreferrer"/>
									<area coords="425,553,453,577" href="http://news.flaudlogic.com/feeds/posts/default?alt=rss" target="_blank" alt="RSS" title="RSS" rel="noopener noreferrer"/>
									<area alt="" coords="570,525,646,539" href="https://gustavosazes.com/" target="_blank" rel="noopener noreferrer"/>
									<area coords="453,553,477,577" href="http://www.facebook.com/flaudlogic" target="_blank" alt="Facebook Page" title="Facebook Page" rel="noopener noreferrer"/>
								</map>
							</section>
            </SplashLayout>
        )
    }
}
