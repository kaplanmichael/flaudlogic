import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';
import HomeCarousel from '../components/HomeCarousel';

export default class HomePage extends React.Component {
    render() {
        return (
            <Layout pageClass="home-page">
                <HomeCarousel />
                <BlogViewerX />
            </Layout>
        )
    }
}
