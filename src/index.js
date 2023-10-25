import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import Root from 'views/Root';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
