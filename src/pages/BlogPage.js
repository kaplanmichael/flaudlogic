import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewer } from '../components/BlogViewer/BlogViewer';
import { MainPageHeader } from '../components/common/MainPageHeader';

export default class BlogPage extends React.Component {

    render() {
        return (
            <Layout pageClass="blog-page">
                <MainPageHeader text="blog" />
                <BlogViewer />
            </Layout>
        )
    }
}
