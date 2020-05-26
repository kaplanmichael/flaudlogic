import React from 'react';
import Layout from '../layout/Layout';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Contact</h1>
                <h2>Mailing List</h2>
                {/* <!-- // MAILCHIMP SUBSCRIBE CODE \\ --> */}
                <p><a href="http://eepurl.com/ug2Y9">Subscribe</a> to the Flaud Logic Mailing List!</p>
                {/* <!-- \\ MAILCHIMP SUBSCRIBE LINK // --> */}
                <h2>Contact Flaud Logic</h2>
                <p>Please use the form below to get in contact with Flaud Logic management.</p>



            </Layout>
        )
    }
}