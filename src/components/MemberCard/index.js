import React from 'react';

export default class MemberCard extends React.Component {
    render() {
        return (
            <section className="member-card">
                <img src={this.props.imageurl} alt=""/>
                <strong>{this.props.name}</strong>
                <em>{this.props.role}</em>
            </section>
        );
    }
}
