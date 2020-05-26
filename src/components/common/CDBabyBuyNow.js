import React from 'react';

export default class CDBabyBuyNow extends React.Component {
	render () {
		const badgeStyle = {
			display: 'inline-block',
			background: 'url(http://CDBaby.name/f/l/flaudlogic_small.jpg) 117px 9px no-repeat, url(https://content.cdbaby.com/img/links/link-artwork-horz-light-buy-album.png) no-repeat',
			backgroundSize: '100px, 100%',
			width: '225px',
			height: '120px'
		}
		return (
            <div>
				<a href="http://store.cdbaby.com/cd/flaudlogic" target="cdbaby" style={badgeStyle} title="Flaud Logic: Flaud Logic" alt="Flaud Logic: Flaud Logic" ></a>
            </div>
        );
    }

}