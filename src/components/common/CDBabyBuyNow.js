import React from 'react';
import ReactGA from 'react-ga';

const targetURL = 'https://www.amazon.com/Flaud-Logic/dp/B00C5JHBH4/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1612380217&sr=8-1';
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
