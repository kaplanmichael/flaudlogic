import React from 'react';
import Layout from '../layout/Layout';
import LinkCluster from '../components/LinkCluster';
import { MainPageHeader } from '../components/common/MainPageHeader';

export default class LinksPage extends React.Component {
    render() {
        return (
            <Layout pageClass="links-page">
      					<MainPageHeader text="links" />
      					<LinkCluster title="Flaud Logic Social Media Links">
      						<a href="http://www.youtube.com/user/FlaudLogic" title="YouTube Channel">YouTube Channel</a>
      						<a href="http://twitter.com/flaudlogic" title="Twitter">Twitter</a>
      						<a href="http://www.facebook.com/flaudlogic" title="Facebook Page">Facebook</a>
      						<a href="http://news.flaudlogic.com/feeds/posts/default?alt=rss" target="_blank" rel="noopener noreferrer" title="RSS">RSS Feed</a>
      					</LinkCluster>
      					<LinkCluster title="Flaud Logic Contributors">
      						<a href="http://www.bennylackner.com/" target="_blank" rel="noopener noreferrer">Benny Lackner</a>
      						<a href="http://www.amyward.com/" target="_blank" rel="noopener noreferrer">Amy Ward</a>
      						<a href="http://www.joebergamini.com/" target="_blank" rel="noopener noreferrer">Joe Bergamini</a>
      						<a href="http://www.scottthomasf.com/" target="_blank" rel="noopener noreferrer">Scott Thomas Ferreira</a>
      						<a href="http://www.stevenkaplan.com/" target="_blank" rel="noopener noreferrer">Steven Kaplan</a>
      						<a href="http://www.eightsixteen.com/" target="_blank" rel="noopener noreferrer">Trax East Recording Studio</a>
      					</LinkCluster>
      					<LinkCluster title="Related Bands, and Projects">
      						<a href="http://www.symphonyx.com" target="_blank" rel="noopener noreferrer">Symphony X</a>
      						<a href="http://www.theaterofthemindopera.com" target="_blank" rel="noopener noreferrer">Theater of the Mind Rock Opera</a>
      						<a href="http://www.happytheman.com/home.htm" target="_blank" rel="noopener noreferrer">Happy the Man</a>
      					</LinkCluster>
      					<LinkCluster title="Media Outlets">
      						<a href="http://www.progulus.com" target="_blank" rel="noopener noreferrer">Progulus Internet Radio</a>
      						<a href="http://www.ladyobscure.com" target="_blank" rel="noopener noreferrer">Lady Obscure</a>
      						<a href="http://www.progpalaceradio.com" target="_blank" rel="noopener noreferrer">Prog Palace Radio</a>
      						<a href="http://www.progrock.com" target="_blank" rel="noopener noreferrer">Progrock.com Radio</a>
      					</LinkCluster>
            </Layout>
        )
    }
}
