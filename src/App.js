import React from 'react';
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MediaPage from './pages/MediaPage'
import PressPage from './pages/PressPage'
import LinksPage from './pages/LinksPage'
import ContactPage from './pages/ContactPage'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trackingId = "UA-1635823-1";
const history = createBrowserHistory();
ReactGA.initialize(trackingId);

history.listen(({ action, location }) => {
  ReactGA.pageview(location.pathname + location.hash); // Record a pageview for the given page
});

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={(props) => {
                      document.title = "Welcome | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <SplashPage {...props} />;
                    }}/>
                    <Route path='/home' render={(props) => {
                      document.title = "Home | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <HomePage {...props} />;
                    }}/>
                    <Route path='/about' render={(props) => {
                      document.title = "About | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <AboutPage {...props} />;
                    }}/>
                    <Route path='/media' render={(props) => {
                      document.title = "Media | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <MediaPage {...props} />;
                    }}/>
                    <Route path='/press' render={(props) => {
                      document.title = "Press | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <PressPage {...props} />;
                    }}/>
                    <Route path='/links' render={(props) => {
                      document.title = "Links | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <LinksPage {...props} />;
                    }}/>
                    <Route path='/contact' render={(props) => {
                      document.title = "Contact | Flaud Logic";
                      ReactGA.set({ page: window.location.pathname + window.location.hash }); // Update the user's current page
                      return <ContactPage {...props} />;
                    }}/>
                </Switch>
            </Router>
        )
    }
}
