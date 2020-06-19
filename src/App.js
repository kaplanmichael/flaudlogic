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
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import './App.scss';

const trackingId = "UA-1635823-1";
const history = createBrowserHistory();
ReactGA.initialize(trackingId);

history.listen(({ action, location }) => {
  ReactGA.set({ page: location.pathname + location.hash }); // Update the user's current page
  ReactGA.pageview(location.pathname + location.hash); // Record a pageview for the given page
  console.log(history, location.pathname + location.hash)
});

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={SplashPage}/>
                    <Route path='/home' render={(routeProps) => (
                        <HomePage
                            {...routeProps}
                        />
                    )}/>
                    <Route path='/news' component={NewsPage}/>
                    <Route path='/about' render={(props) => {
                       document.title = "About | Flaud Logic";
                       return <AboutPage {...props} />;
                     }}/>
                    <Route path='/media' component={MediaPage}/>
                    <Route path='/press' component={PressPage}/>
                    <Route path='/links' component={LinksPage}/>
                    <Route path='/contact' component={ContactPage}/>
                </Switch>
            </Router>
        )
    }
}
