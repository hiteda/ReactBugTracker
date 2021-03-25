import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import FetchData from './components/FetchData';
import { Counter } from './components/Counter';
import ReportsList from './components/reports/ReportsList';
import ReportView from './components/reports/ReportView';
import ReportNew from './components/reports/ReportNew';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route exact path='/reports' component={ReportsList} />
        <Route exact path='/reports/:id' component={ReportView} />
        <Route path='/new/report' component={ReportNew} />
      </Layout>
    );
  }
}
