import React from 'react';
import PropTypes from 'prop-types';

export default class LinkCluster extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: props.title
        };
    }
    render() {
        const listItems = React.Children.map( this.props.children, (child) => {
            return (<li key={child.toString()}>{child}</li>)
        });
        return (
            <div className="link-container">
                <h3>{this.state.title}</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }



}
LinkCluster.propTypes = {
    title: PropTypes.string.isRequired
};
