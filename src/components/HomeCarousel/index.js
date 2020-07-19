import React from 'react';
import Slider from "react-slick";

const mktg = {};
let images = [];

function importAll (r,dataStore) {
  r.keys().forEach(key => dataStore[key] = r(key));
}
importAll(require.context("../../images/gallery/trax_east", false, /\.(gif|jpg|png)$/), mktg);

export default class HomeCarousel extends React.Component {

  render() {
        const settings = {
         adaptiveHeight: true,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 7500,
         dots: false,
         fade: true,
         infinite: true,
         pauseOnHover: false,
         speed: 7000,
         slidesToShow: 1,
         slidesToScroll: 1
       };
        return (
          <>
            <Slider {...settings}>
            {Object.keys(mktg).map((key, index) => {
                images.push(mktg[key]);
                return (
                  <div>
                       <img key={index} onClick={() => this.setState({isOpen:true, photoIndex: index})} src={mktg[key]} alt=""/>
                  </div>
                )

            })}
            </Slider>
          </>
        );
    }

}
