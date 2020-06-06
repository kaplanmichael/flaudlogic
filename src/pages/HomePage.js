import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer'

export default class HomePage extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Home</h1>
                <BlogViewerX />
            </Layout>
        )
    }
}
