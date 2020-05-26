import React from 'react';
import Layout from '../layout/Layout';
import LinkCluster from '../components/LinkCluster';
import './LinksPage.less';

export default class LinksPage extends React.Component {
    render() {
        return (
            <Layout>
				<div className="links-page">
					<h1>Links</h1>
					<LinkCluster title="Flaud Logic Social Media Links">
						<a href="http://www.youtube.com/user/FlaudLogic" title="YouTube Channel">YouTube Channel</a>
						<a href="http://twitter.com/flaudlogic" title="Twitter">Twitter</a>
						<a href="http://www.facebook.com/flaudlogic" title="Facebook Page">Facebook</a>
						<a href="http://news.flaudlogic.com/feeds/posts/default?alt=rss" target="_blank" title="RSS">RSS Feed</a>
					</LinkCluster>
					<LinkCluster title="Flaud Logic Contributors">
						<a href="http://www.bennylackner.com/" target="_blank">Benny Lackner</a>
						<a href="http://www.amyward.com/" target="_blank">Amy Ward</a>
						<a href="http://www.joebergamini.com/" target="_blank">Joe Bergamini</a>
						<a href="http://www.scottthomasf.com/" target="_blank">Scott Thomas Ferreira</a>
						<a href="http://www.stevenkaplan.com/" target="_blank">Steven Kaplan</a>
						<a href="http://www.traxeast.com/" target="_blank">Trax East Recording Studio</a>
					</LinkCluster>
					<LinkCluster title="Related Bands, and Projects">
						<a href="http://www.symphonyx.com" target="_blank">Symphony X</a>
						<a href="http://www.theaterofthemindopera.com" target="_blank">Theater of the Mind Rock Opera</a>
						<a href="http://www.wickedmonkey.net" target="_blank">Wicked Monkey</a>
						<a href="http://www.oblivionsun.com/" target="_blank">Oblivion Sun</a>
						<a href="http://www.happytheman.com/home.htm" target="_blank">Happy the Man</a>
					</LinkCluster>
					<LinkCluster title="Media Outlets">
						<a href="http://www.progulus.com" target="_blank">Progulus Internet Radio</a>
						<a href="http://www.beyondearcandy.com" target="_blank">Beyond Ear Candy</a>
						<a href="http://www.ladyobscure.com" target="_blank">Lady Obscure</a>
						<a href="http://www.progmetalzone.com" target="_blank">Prog Metal Zone</a>
						<a href="http://www.progpalaceradio.com" target="_blank">Prog Palace Radio</a>
						<a href="http://www.progrock.com" target="_blank">Progrock.com Radio</a>
					</LinkCluster>
				</div>
            </Layout>
        )
    }
}