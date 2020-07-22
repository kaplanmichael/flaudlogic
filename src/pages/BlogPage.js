import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer';
import { MainPageHeader } from '../components/common/MainPageHeader';

export default class BlogPage extends React.Component {

    render() {
        return (
            <Layout pageClass="blog-page">
                <MainPageHeader text="blog" />
                <BlogViewerX />
            </Layout>
        )
    }
}
