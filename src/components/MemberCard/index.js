import React from 'react';
import PropTypes from 'prop-types';
import './MemberCard.less';

export default class MemberCard extends React.Component {
    render() {
        return (
            <section className="member-card">
                <img src={this.props.imageurl} />
                <strong>{this.props.name}</strong>
                <em>{this.props.role}</em>
            </section>
        );
    }
}
