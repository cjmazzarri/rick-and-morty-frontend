import { createApp } from "vue";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// Tailwind
import './assets/index.css';

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://xvideos.com/api',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
link: httpLink,
cache,
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(apolloClient);

app.mount("#app");