import React from 'react';

export default class Analytics extends React.Component {
    render () {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }

}