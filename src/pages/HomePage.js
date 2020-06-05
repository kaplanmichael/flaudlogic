import React from 'react';
import Layout from '../layout/Layout';
import { BlogViewerX } from '../components/BlogViewer/BlogViewer'

export default class HomePage extends React.Component {
    render() {
        return (
            <Layout
                error={this.props.error}
                isLoaded={this.props.isLoaded}
                data={this.props.data}
                fetch={this.props.fetch}
                pageTokens={this.props.pageTokens}
            >
                <h1>Home</h1>
                <BlogViewerX />
            </Layout>
        )
    }
}
