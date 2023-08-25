import React from "react";
import ReactGA from "react-ga";

import { ReactComponent as IconFacebook } from "../../images/icon_facebook.svg";
import { ReactComponent as IconRss } from "../../images/icon_rss.svg";
import { ReactComponent as IconTwitter } from "../../images/icon_twitter.svg";
import { ReactComponent as IconYouTube } from "../../images/icon_youtube.svg";

export default class SocialMediaIcons extends React.Component {
  render() {
    return (
      <ul className="social-media-icons">
        <li>
          <ReactGA.OutboundLink
            eventLabel="YouTube Channel"
            to="http://www.youtube.com/user/FlaudLogic"
            target="_blank"
          >
            <IconYouTube />
          </ReactGA.OutboundLink>
        </li>
        <li>
          <ReactGA.OutboundLink
            eventLabel="Facebook Page"
            to="http://www.facebook.com/flaudlogic"
            target="_blank"
          >
            <IconFacebook />
          </ReactGA.OutboundLink>
        </li>
        <li>
          <ReactGA.OutboundLink
            eventLabel="Twitter Profile"
            to="http://twitter.com/flaudlogic"
            target="_blank"
          >
            <IconTwitter />
          </ReactGA.OutboundLink>
        </li>
        <li>
          <ReactGA.OutboundLink
            eventLabel="RSS Feed"
            to="http://news.flaudlogic.com/feeds/posts/default?alt=rss"
            target="_blank"
          >
            <IconRss />
          </ReactGA.OutboundLink>
        </li>
      </ul>
    );
  }
}
