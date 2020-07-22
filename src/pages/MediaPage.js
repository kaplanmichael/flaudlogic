import React from 'react';
import Layout from '../layout/Layout';
import DynamicImageGrid from '../components/DynamicImageGrid';
import ReactGA from 'react-ga';
import { MainPageHeader } from '../components/common/MainPageHeader';
import se_1_mp3 from '../media/audio/se_1.mp3';
import se_1_ogg from '../media/audio/se_1.ogg';
import se_1_wav from '../media/audio/se_1.wav';
import se_2_mp3 from '../media/audio/se_2.mp3';
import se_2_ogg from '../media/audio/se_2.ogg';
import se_2_wav from '../media/audio/se_2.wav';
import sg_1_mp3 from '../media/audio/sg_1.mp3';
import sg_1_ogg from '../media/audio/sg_1.ogg';
import sg_1_wav from '../media/audio/sg_1.wav';
import sh_1_mp3 from '../media/audio/sh_1.mp3';
import sh_1_ogg from '../media/audio/sh_1.ogg';
import sh_1_wav from '../media/audio/sh_1.wav';
import oy_1_mp3 from '../media/audio/oy_1.mp3';
import oy_1_ogg from '../media/audio/oy_1.ogg';
import oy_1_wav from '../media/audio/oy_1.wav';
import oy_2_mp3 from '../media/audio/oy_2.mp3';
import oy_2_ogg from '../media/audio/oy_2.ogg';
import oy_2_wav from '../media/audio/oy_2.wav';

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
                  <MainPageHeader text="media" />
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
                  <p>Secret Engine</p>
                  <audio controls="controls">
                      <source src={se_1_mp3} type="audio/mpeg" />
                      <source src={se_1_ogg} type="audio/ogg" />
                      <source src={se_1_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>
                  <audio controls="controls">
                      <source src={se_2_mp3} type="audio/mpeg" />
                      <source src={se_2_ogg} type="audio/ogg" />
                      <source src={se_2_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>
                  <p>Say Goodbye</p>
                  <audio controls="controls">
                      <source src={sg_1_mp3} type="audio/mpeg" />
                      <source src={sg_1_ogg} type="audio/ogg" />
                      <source src={sg_1_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>
                  <p>Shanna</p>
                  <audio controls="controls">
                      <source src={sh_1_mp3} type="audio/mpeg" />
                      <source src={sh_1_ogg} type="audio/ogg" />
                      <source src={sh_1_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>
                  <p>One Year</p>
                  <audio controls="controls">
                      <source src={oy_1_mp3} type="audio/mpeg" />
                      <source src={oy_1_ogg} type="audio/ogg" />
                      <source src={oy_1_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>
                  <audio controls="controls">
                      <source src={oy_2_mp3} type="audio/mpeg" />
                      <source src={oy_2_ogg} type="audio/ogg" />
                      <source src={oy_2_wav} type="audio/wav" />
                      Your browser does not support the HTML5 audio element.
                  </audio>


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
