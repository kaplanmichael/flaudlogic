import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

export default class LinkCluster extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: props.title
        };
    }
    render() {
        const listItems = React.Children.map( this.props.children, (child) => {
          console.log(child)
            return (
              <li key={child.props.children}>
                <ReactGA.OutboundLink
                  eventLabel={`Links - ${child.props.children}`}
                  to={child.props.href}
                  target="_blank"
                >
                  {child.props.children}
                </ReactGA.OutboundLink>
              </li>
            )
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
