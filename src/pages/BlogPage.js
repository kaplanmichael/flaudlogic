import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';

export default class BlogPage extends React.Component {

    render() {
        return (
            <Layout pageClass="blog-page">
                <h1>
                  <em data-text="blog">Blog</em>
                </h1>
                <BlogViewerX />
            </Layout>
        )
    }
}
