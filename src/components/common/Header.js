import React from 'react';
import HeaderImg from '../../images/art_hdr.jpg';

export default class Analytics extends React.Component {
    render () {
        return (
            <header>
                <img className="hdr-main" src={HeaderImg} />
                {this.props.children}
            </header>
        );
    }

}
