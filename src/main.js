import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './../node_modules/bulma/css/bulma.css';
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";
import VueApollo from 'vue-apollo'
import { createProvider } from './vue-apollo'


// Install the authentication plugin here
Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
  
},
);

Vue.use(VueApollo)
Vue.use(Buefy)
Vue.config.productionTip = false

// Create the apollo client
new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')