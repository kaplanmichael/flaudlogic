import React from 'react';
import PropTypes from 'prop-types';

export default class ExpandText extends React.Component {
    constructor(props) {
        super();
        this.state = {
            btnLabel: props.moreTextLabel,
            isVisible: false
        };
        this.toggleText = this.toggleText.bind(this);
        this.recursiveMap = this.recursiveMap.bind(this);
    }

    render() {
        const content = this.recursiveMap(this.props.children, child => {
            if (child.type === 'aside') {
                return React.cloneElement(child, {
                    className: this.state.isVisible ? 'showMe' : 'hideMe'
                })

            } else {
                return child
            }
        });

        return (
            <div className="comp-expand-text">
                {content}
                <button onClick={this.toggleText}>{this.state.isVisible === true ? this.props.lessTextLabel : this.props.moreTextLabel}</button>
            </div>
        );
    }

    /**
     * Returns each child and subchild that were passed into the ExpandText component as this.children
     * recursiveMap
     * @param children
     * @param fn
     */
    recursiveMap(children, fn) {
        return React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
                return child;
            }

            if (child.props.children) {
                child = React.cloneElement(child, {
                    children: this.recursiveMap(child.props.children, fn)
                });
            }

            return fn(child);
        });
    }

    /**
     * Changes component's state when button is clicked
     */
    toggleText() {
        this.setState({
            isVisible: !(this.state.isVisible)
        });
    }

}
/*
ExpandText.propTypes = {
    children: PropTypes.string.isRequired
};
*/

ExpandText.defaultProps = {
    moreTextLabel: 'More...',
    lessTextLabel: 'Less...'
};
