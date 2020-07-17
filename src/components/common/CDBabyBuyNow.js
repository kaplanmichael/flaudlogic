import React from 'react';
import ReactGA from 'react-ga';

const targetURL = 'https://play.google.com/store/music/album/Flaud_Logic_Flaud_Logic?id=Bsxa5vsbjhxgjfos6yihjncwim4&hl=en_US';
export default class CDBabyBuyNow extends React.Component {
	handleClick = () => {
		ReactGA.event({
			category: 'User',
			action: 'Click',
			label: 'Buy Now'
		});
		window.open(targetURL);
	}
	render () {
		return (
            <aside className="comp-buy-now">
							<figure>
								<img src="http://CDBaby.name/f/l/flaudlogic_small.jpg" title="Flaud Logic: Flaud Logic" alt="Flaud Logic: Flaud Logic"  onClick={() => this.handleClick()} />
								<figcaption>
									<h2>Flaud Logic</h2>
									<button onClick={() => this.handleClick()}>Buy Now</button>
								</figcaption>
							</figure>
            </aside>
        );
    }

}
