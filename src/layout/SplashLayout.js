import React from 'react';

export default class SplashLayout extends React.Component {
    render() {
        return (
            <div className="splash-page">
                    {this.props.children}
            </div>
        )
    }
}
