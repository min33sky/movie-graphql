import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from './apolloClient';
import { Home, Detail } from './components';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Route exact path="/" component={Home} />
            <Route path="/details/:movieId" component={Detail} />
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
