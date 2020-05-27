import React from 'react';
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import MediaPage from './pages/MediaPage'
import PressPage from './pages/PressPage'
import LinksPage from './pages/LinksPage'
import ContactPage from './pages/ContactPage'
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            apiUrl: 'https://www.googleapis.com/blogger/v3/blogs/2726861849607401146/posts?key=AIzaSyCgg1t9I1o3nz8OG1En1Bbqt8I-vF18LvU',
            pageTokens: [],
            data: {}
        };
        this.fetchBlogData = this.fetchBlogData.bind(this);
    }

    componentDidMount() {
        this.state.pageTokens.push('');
        this.fetchBlogData();
    }

    generateApiUrl(pageToken) {
        let newUrl = this.state.apiUrl;
        if (pageToken !== undefined && pageToken !== '' ) {
            newUrl += '&pageToken=' + pageToken;
        }
        return newUrl;
    }

    fetchBlogData(pageToken) {
        fetch(this.generateApiUrl(pageToken) )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                    //add new nextPage Token to the array of tokens
                    if(!this.state.pageTokens.includes(result.nextPageToken)) {
                        console.log('fetch: here is the loaded token ' + result.nextPageToken);
                        this.state.pageTokens.push(result.nextPageToken);
                        console.log('fetch: here it is pushed into the array ' + this.state.pageTokens);
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={SplashPage}/>
                    <Route path='/home' render={(routeProps) => (
                        <HomePage
                            error={this.state.error}
                            isLoaded={this.state.isLoaded}
                            data={this.state.data}
                            fetch={this.fetchBlogData}
                            pageTokens={this.state.pageTokens}
                            {...routeProps}
                        />
                    )}/>
                    <Route path='/news' component={NewsPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/media' component={MediaPage}/>
                    <Route path='/press' component={PressPage}/>
                    <Route path='/links' component={LinksPage}/>
                    <Route path='/contact' component={ContactPage}/>
                </Switch>
            </Router>
        )
    }
}
