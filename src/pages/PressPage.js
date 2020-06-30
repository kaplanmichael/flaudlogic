import React from 'react';
import Layout from '../layout/Layout';
import {Link} from 'react-router-dom';
import DynamicImageGrid from '../components/DynamicImageGrid';
import pressKit from '../media/fl_press_kit.pdf';
import pressRelease from '../media/press_20130117_romeo.pdf';
import ReactGA from 'react-ga';

const press = {};

function importAll (r,dataStore) {
  r.keys().forEach(key => dataStore[key] = r(key));
}
//Import all images in a certain directory to display in the image grid
importAll(require.context("../images/gallery/press", false, /\.(gif|jpg|png)$/), press);

export default class PressPage extends React.Component {
    render() {
        return (
            <Layout>
				<section className="media-page">
					<h1>Press</h1>
          <h3>Press Kit</h3>
					<p><a href={pressKit} target="_blank" rel="noopener noreferrer" onClick={()=> {
            ReactGA.event({
              category: 'User',
              action: 'View',
              label: 'Press Kit'
            });
          }}>View / Download</a>&nbsp;(PDF)</p>
          <h3>Press Release</h3>
          <p><a href={pressRelease} target="_blank" rel="noopener noreferrer" onClick={()=> {
            ReactGA.event({
              category: 'User',
              action: 'View',
              label: 'Press Release'
            });
          }}>Flaud Logic reveals album's special guest: Symphony X guitarist Michael Romeo</a>&nbsp;(January 17, 2013)</p>
          <h3>Interview</h3>
          <p><ReactGA.OutboundLink
            eventLabel="Lady Obscure - Interview"
            to="https://ladyobscure.com/http-www-ladyobscure-com-p5370-2/"
            target="_blank"
          >
            Lady Obscure Music Magazine
          </ReactGA.OutboundLink>
          &nbsp;(March 2, 2013)</p>
          <h2>Reviews</h2>
					<p>"[The album is] awesome...Killer production. Man, when is the live concert in Berlin?"</p>
					<p>— Benny Lackner,  Pianist, Composer</p>
					<p>"...I have listened to it several times from start to finish, and I'm really digging it.  It gets better every time which says a lot about the depth of the work.  Takes me back to the days when I was obsessed with Tales From Topographic Oceans.  [Flaud Logic] is actually even more dynamic and moving on many fronts &#151; certainly more modern.  The production sounds great — the drums, variety of ripping guitar sounds, and vocals.  There is not much out there like this, so I'm so glad [it is] filling a void."</p>
					<p>— Chris Rich,  Composer, Theater of the Mind Rock Opera</p>
					<p>"Man, I'm looking forward to more stuff in the future from [Michael Kaplan]...This is a very, very impressive album...It is some tremendous stuff, in my opinion."</p>
					<p>— Frank Remington, Prog Palace Radio</p>
					<p>
						<a href="http://prognaut.com/reviews/flaud-logic.html" target="_blank" rel="noopener noreferrer">Prognaut</a>&nbsp;(August 5, 2014)<br />
						<a href="http://www.dprp.net/reviews/201416.php#flaudlogic" target="_blank" rel="noopener noreferrer">DPRP – Dutch Progressive Rock Page</a>&nbsp;(April , 2014)<br />
						<a href="http://www.progmetalzone.com/2013/flaud-logic-review-fantastic-prog-rockmetal-debut-from-new-york-composer-and-musician-michael-kaplan/" target="_blank" rel="noopener noreferrer">Prog Metal Zone</a>&nbsp;(March 29, 2013)<br />
						<a href="https://ladyobscure.com/http-www-ladyobscure-com-post_typealbumsp4815/" target="_blank" rel="noopener noreferrer">Lady Obscure Music Magazine</a>&nbsp;(March 2, 2013)<br />
					</p>
					<h2>Images</h2>
					<p><span>Click image to enlarge.</span></p>
					<DynamicImageGrid data={press}/>
				</section>
            </Layout>
        )
    }
}
