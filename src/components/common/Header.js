import React from 'react';
import HeaderBkgd from '../../images/art_hdr.jpg';

export default class Analytics extends React.Component {
    render () {
        return (
            <header>
                <img src={HeaderBkgd} />
                {this.props.children}
            </header>
        );
    }

}
