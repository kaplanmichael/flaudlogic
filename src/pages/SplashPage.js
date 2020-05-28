import React from 'react';
import {Link} from 'react-router-dom';
import SplashLayout from '../layout/SplashLayout';

export default class SplashPage extends React.Component {
	render() {
        return (
            <SplashLayout>
				<section className="splash-container">
					<img src={ require('../images/art_fl_splash.jpg') } width={700} height={632} useMap="#splash" alt="Flaud Logic | The Official Webscape" />
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
						<area alt="" coords="570,525,646,539" href="http://www.abstrata.net" target="_blank" rel="noopener noreferrer"/>
						<area coords="453,553,477,577" href="http://www.facebook.com/flaudlogic" target="_blank" alt="Facebook Page" title="Facebook Page" rel="noopener noreferrer"/>
					</map>
				</section>
            </SplashLayout>
        )
    }
}
