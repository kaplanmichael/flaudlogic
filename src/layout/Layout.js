import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Navigation from '../components/Navigation';
import CDBabyBuyNow from '../components/common/CDBabyBuyNow';
import TwitterTimeline from '../components/common/TwitterTimeline';
//import FacebookWidget from '../components/common/FacebookWidget';

export default class Layout extends React.Component {

    render() {
        return (
            <>
              <Header>
                  <Navigation />
              </Header>
              <div className={`content-container ${this.props.pageClass}`}>
                  <div className="column left">
                      {this.props.children}
                  </div>
                  {this.props.hasSidebar ? <div className="column right"><CDBabyBuyNow /><TwitterTimeline /></div> : ''}
              </div>
              <Footer />
            </>
        )
    }
}
Layout.defaultProps = {
    hasSidebar: true
};
