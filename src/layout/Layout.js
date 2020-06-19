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
            <div id="content-container" className={this.props.pageClass}>
                <Header>
                    <Navigation />
                </Header>
                <div className="column left">
                    {this.props.children}
                </div>
                {this.props.hasSidebar ? <div className="column right"><CDBabyBuyNow /><TwitterTimeline /></div> : ''}
                <div style={{clear: 'both'}}/>
                <Footer />
            </div>
        )
    }
}
Layout.defaultProps = {
    hasSidebar: true
};


/*
 <!--|||| Page Body ||||--->
 <div class="column left">
 <!--page title-->
 <img src="images/hdr_links.png" width="232" height="51" alt="" class="title-main" />
 <br />

 </div>
 <div class="column right">

 </div>

 */
