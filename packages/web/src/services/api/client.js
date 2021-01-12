const { ApolloClient, InMemoryCache } = require('@apollo/client')

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000',
})
