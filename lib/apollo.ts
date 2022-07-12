import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: 'https://dev-creator-backoffice-api.shopcat.click/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;