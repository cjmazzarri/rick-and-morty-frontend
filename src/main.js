import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo from "vue-apollo";

const getHeaders = () => {
    const headers = {};
    const token = window.localStorage.getItem('apollo-token');
    if (token) {
        headers.authorization = `Bearer ${token}`;
    }
    return headers;
};

// Create an http link:

const link = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    fetch,
    headers: getHeaders()
});

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
        addTypename: true
    })
});

const apolloProvider = new VueApollo({
    defaultClient: client,
})

createApp(App).use(store).use(router).use(apolloProvider).mount('#app')

Vue.use(VueApollo);

// new Vue({
//     router,
//     apolloProvider,
//     store,
//     render: h => h(App)
// }).$mount("#app");
