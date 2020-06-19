import React from 'react';

export default class SplashLayout extends React.Component {
    render() {
        return (
            <div>
                    {this.props.children}
            </div>
        )
    }
}
