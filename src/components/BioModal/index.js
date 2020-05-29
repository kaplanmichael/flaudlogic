import React from 'react';
import PropTypes from 'prop-types';

export default class BioModal extends React.Component {
    render() {
        return (
            <article className={`comp-bio-modal ${this.props.visible ? '' : 'hidden'}`} >
              <figure>
                <img src={this.props.obj.imageurl} alt={`Photo of ${this.props.obj.name}`}/>
                <figcaption>
                  {this.props.obj.name}<br />
                  <em>{this.props.obj.role}</em>
                </figcaption>
              </figure>
              {this.props.obj.bio}
            </article>
        );
    }

}
BioModal.propTypes = {
    obj: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired
};

// Specifies the default values for props:
BioModal.defaultProps = {
  visible: false
};
