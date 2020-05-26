import React from 'react';
import Analytics from '../components/common/Analytics';
import './SplashLayout.less';

export default class SplashLayout extends React.Component {
    render() {
        return (
            <div>
                    {this.props.children}
            </div>
        )
    }
}
