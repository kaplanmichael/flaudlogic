import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

export default class ImageLink extends React.Component {
    render() {
        return (
            <Link to={this.props.targetUrl}><img src={this.props.imageUrl} width={this.props.width} height={this.props.height} alt={this.props.altText} /></Link>
        );
    }
}

ImageLink.PropTypes = {
  targetUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string
};

// Specifies the default values for props:
ImageLink.defaultProps = {
  width: 300,
  height: 175
};