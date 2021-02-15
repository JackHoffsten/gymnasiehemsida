import * as React from 'react';

import * as styles from './App.scss';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';

import { StartPage } from 'containers/StartPage/StartPage';
import { ExplorePage } from 'containers/ExplorePage/ExplorePage';

import { Navbar } from 'components/Navbar/Navbar';

export class App extends React.Component {
  public render() {
    if (location.hash === '') {
      window.history.pushState({}, '', `${location.pathname}#/`);
    }

    return (
      <BrowserRouter basename={`${location.pathname}#`}>
        <Navbar />
        <div>
          <Switch>
            <Route path="/" component={StartPage} exact={true} />
            <Route path="/explore" component={ExplorePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
