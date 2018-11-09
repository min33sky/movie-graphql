import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import client from './apolloClient';
import { Home, Detail } from './components';
import { GlobalStyle } from './globalStyles';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <GlobalStyle />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/details/:movieId" component={Detail} />
            </main>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
