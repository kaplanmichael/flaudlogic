import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';
import HomeCarousel from '../components/HomeCarousel';
import ReactPlayer from 'react-player/youtube';

const stylez = {
  position: 'relative',
  paddingTop: '56.25%'
}
const hello = {
  position: 'absolute',
  top: 0,
  left: 0
}
export default class HomePage extends React.Component {
    render() {
        return (
            <Layout pageClass="home-page">
                <HomeCarousel />
                <p>Additional content coming soon!</p>
                <section style={stylez}>
                  <ReactPlayer url='https://youtu.be/vpTuSpUboxY' width='100%' height='100%' style={hello} />
                </section>
            </Layout>
        )
    }
}
