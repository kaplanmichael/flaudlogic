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
            <figure className="member-card">
              <div onClick={() => this.openModal()}>
                <img src={this.props.member.thumburl} alt={`${this.props.member.name}`}/>
                <figcaption>
                  <strong>{this.props.member.name}</strong>
                  <em>{this.props.member.role}</em>
                </figcaption>
              </div>
                <BioModal obj={this.props.member} visible={this.state.visible} clickAction={() => this.closeModal()}/>
            </figure>
          </>
        );
    }
}
