import React from 'react';
import Layout from '../layout/Layout';
import DynamicImageGrid from '../components/DynamicImageGrid';
import ReactGA from 'react-ga';

const releaseparty = {};
const traxeast = {};
const mktg = {};

function importAll (r,dataStore) {
  r.keys().forEach(key => dataStore[key] = r(key));
}
//Import all images in a certain directory to display in the image grid
importAll(require.context("../images/gallery/releaseparty", false, /\.(gif|jpg|png)$/), releaseparty);
importAll(require.context("../images/gallery/trax_east", false, /\.(gif|jpg|png)$/), traxeast);
importAll(require.context("../images/gallery/mktg", false, /\.(gif|jpg|png)$/), mktg);

export default class MediaPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="media-page">
        					<h1>Media</h1>
        					<h2>Discography</h2>
        					<h3>Flaud Logic (Released: 3/31/2013)</h3>
        					<p>Package includes 4-panel full-color digipak, 6-page full-color gatefold with original artwork, song lyrics, and album credits. Click thumbnails below to enlarge.</p>
                  <ReactGA.OutboundLink
                    eventLabel="Buy The Album"
                    to="https://play.google.com/store/music/album/Flaud_Logic_Flaud_Logic?id=Bsxa5vsbjhxgjfos6yihjncwim4&hl=en_US"
                    target="_blank"
                  >
                    Buy The Album
                  </ReactGA.OutboundLink>
                  <br /><br />
        					<DynamicImageGrid data={mktg}/>
        					<h2>Images</h2>
        					<p>Photos from the Flaud Logic Album Release Party – 3/30/2013</p>
        					<DynamicImageGrid data={releaseparty}/>
        					<p>Photos from Flaud Logic drum recording session at Trax East, South River, NJ.</p>
        					<DynamicImageGrid data={traxeast}/>
        				</section>
            </Layout>
        )
    }
}
