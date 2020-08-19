import React from 'react';
import Slider from "react-slick";

const mktg = {};
let images = [];

function importAll (r,dataStore) {
  r.keys().forEach(key => dataStore[key] = r(key));
}
importAll(require.context("../../images/gallery/trax_east", false, /\.(gif|jpg|png)$/), mktg);

export default class HomeCarousel extends React.Component {

  shuffle(arr) {
    let i = arr.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  render() {
        const settings = {
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
              })}
              {this.shuffle(images)}
              {images.map((image, index) => {
                  return (
                    <div key={index}>
                         <img onClick={() => this.setState({isOpen:true, photoIndex: index})} src={image} alt=""/>
                         <img src={image} alt=""/>
                    </div>
                  )
              })}
            </Slider>
          </>
        );
    }

}
