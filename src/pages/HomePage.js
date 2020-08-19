import React from 'react';
import Layout from '../layout/Layout';
import { TwoCol } from '../components/TwoCol';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';
import HomeCarousel from '../components/HomeCarousel';
import { VideoPlayer } from '../components/VideoPlayer';
import { LatestNews } from '../components/LatestNews';

export default class HomePage extends React.Component {
    render() {
        return (
            <Layout pageClass="home-page">
                <HomeCarousel />
                <TwoCol
                  left={
                    <>
                      <h2>Video</h2>
                      <VideoPlayer />
                    </>
                  }
                  right={
                    <>
                      <h2>Latest News</h2>
                      <LatestNews />
                    </>
                  }
                />
            </Layout>
        )
    }
}
