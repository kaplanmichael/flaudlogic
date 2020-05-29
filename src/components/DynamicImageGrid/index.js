import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class DynamicImageGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };

        this.images = [];

    }

    render() {
        const data = this.props.data;
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="comp-dynamic-image-grid">
                {Object.keys(data).map((key, index) => {
                    this.images.push(data[key]);
                    return (
                           <img key={index} onClick={() => this.setState({isOpen:true, photoIndex: index})} src={data[key]} width="75" height="75" alt=""/>
                    )

                })}
                {isOpen && (
                          <Lightbox
                            mainSrc={this.images[photoIndex]}
                            nextSrc={this.images[(photoIndex + 1) % this.images.length]}
                            prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                              this.setState({
                                photoIndex: (photoIndex + this.images.length - 1) % this.images.length
                              })
                            }
                            onMoveNextRequest={() =>
                              this.setState({
                                photoIndex: (photoIndex + 1) % this.images.length
                              })
                            }
                          />
                        )}

            </div>
        );
    }
}
