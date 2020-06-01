import React from 'react';
import BioModal from '../BioModal';

export default class MemberCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    openModal() {
      this.setState({
        visible: true
      });
    }

    closeModal() {
      this.setState({
        visible: false
      });
    }

    render() {
        return (
          <>
            <section className="member-card">
                <img src={this.props.member.thumburl} onClick={() => this.openModal()} alt=""/>
                <strong>{this.props.member.name}</strong>
                <em>{this.props.member.role}</em>
                <BioModal obj={this.props.member} visible={this.state.visible} clickAction={() => this.closeModal()}/>
            </section>
          </>
        );
    }
}
