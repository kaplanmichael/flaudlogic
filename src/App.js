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
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={SplashPage}/>
                    <Route path='/home' render={(routeProps) => (
                        <HomePage
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
