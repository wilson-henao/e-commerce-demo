import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import { relayStylePagination } from '@apollo/client/utilities'
import App from './App.tsx'
import './styles/index.css'

const client = new ApolloClient({
  connectToDevTools: import.meta.env.MODE === 'development',
  uri: import.meta.env.VITE_SERVER_URI,
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       products: relayStylePagination()
    //     }
    //   }
    // }
  })
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>
)
