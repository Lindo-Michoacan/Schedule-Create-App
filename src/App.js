import './App.css';
import NavBar from './components/NavBar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client
    }>
      <div className="App">
        <NavBar />
      </div>
    </ApolloProvider>
  );
}

export default App;
