import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Navigation from '../components/Navigation';
import Analytics from '../components/common/Analytics';
import CDBabyBuyNow from '../components/common/CDBabyBuyNow';
import TwitterTimeline from '../components/common/TwitterTimeline';
//import FacebookWidget from '../components/common/FacebookWidget';
import { BlogViewer } from '../components/BlogViewer/BlogViewer'

export default class Layout extends React.Component {

    render() {

        const content = React.Children.map( this.props.children, (child) => {
            if (child.type === BlogViewer) {
                return React.cloneElement(child, {
                    error: this.props.error,
                    isLoaded: this.props.isLoaded,
                    data: this.props.data,
                    fetch: this.props.fetch,
                    pageTokens: this.props.pageTokens
                })

            } else {
                return child
            }
        });
        return (
            <div id="content-container">
                <Header>
                    <Analytics />
                    <Navigation />
                </Header>
                <div className="column left">
                    {content}
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
