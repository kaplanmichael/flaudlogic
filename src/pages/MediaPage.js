import React from 'react';
import Layout from '../layout/Layout';
import DynamicImageGrid from '../components/DynamicImageGrid';
import './MediaPage.less';

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
					<p><strong>Flaud Logic (Released: 3/31/2013)</strong><br />
					Package includes 4-panel full-color digipak, 6-page full-color gatefold with original artwork, song lyrics, and album credits. Click thumbnails to enlarge.</p>
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