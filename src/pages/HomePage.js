import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';
import HomeCarousel from '../components/HomeCarousel';
import ReactPlayer from 'react-player/youtube';

export default class HomePage extends React.Component {
    render() {
        return (
            <Layout pageClass="home-page">
                <HomeCarousel />
                <p>Additional content coming soon!</p>
                <ReactPlayer url='https://youtu.be/vpTuSpUboxY' />
            </Layout>
        )
    }
}
