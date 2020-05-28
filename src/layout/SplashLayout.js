import React from 'react';
import Analytics from '../components/common/Analytics';

export default class SplashLayout extends React.Component {
    render() {
        return (
            <div>
                    {this.props.children}
            </div>
        )
    }
}
