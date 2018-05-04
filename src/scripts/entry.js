import 'offline-js';
import Vue from 'vue';
import {VueMasonryPlugin} from 'vue-masonry';
import VueTruncate from 'vue-truncate-filter';
import App from '@components/App/';
import store from './store';

Vue.use(VueMasonryPlugin);
Vue.use(VueTruncate);

Offline.options = {
  checkOnLoad: true,
  requests: true
};

new Vue({
    el: '#app',
    render: (h) => h(App),
    store
});

store.dispatch('feeds/fetch-latest-items');
