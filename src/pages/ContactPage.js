import React from 'react';
import Layout from '../layout/Layout';
import { MainPageHeader } from '../components/common/MainPageHeader';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <MainPageHeader text="contact" />
                <p>-----@-----.---</p>
            </Layout>
        )
    }
}
