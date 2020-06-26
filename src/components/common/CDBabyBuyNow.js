import React from 'react';
import ReactGA from 'react-ga';

export default class CDBabyBuyNow extends React.Component {
	render () {
		const badgeStyle = {
			display: 'inline-block',
			background: 'url(http://CDBaby.name/f/l/flaudlogic_small.jpg) 117px 9px no-repeat, url(https://content.cdbaby.com/img/links/link-artwork-horz-light-buy-album.png) no-repeat',
			backgroundSize: '100px, 100%',
			width: '225px',
			height: '120px',
			marginBottom: '20px'
		}
		return (
            <div>
							<a href="https://play.google.com/store/music/album/Flaud_Logic_Flaud_Logic?id=Bsxa5vsbjhxgjfos6yihjncwim4&hl=en_US"  target="_blank" rel="noopener noreferrer" style={badgeStyle} title="Flaud Logic: Flaud Logic" alt="Flaud Logic: Flaud Logic" onClick={()=> {
								ReactGA.event({
	                category: 'User',
	                action: 'Click',
	                label: 'Buy The Album'
	              });
							}}>&nbsp;</a>
            </div>
        );
    }

}
