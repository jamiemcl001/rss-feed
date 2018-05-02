import Vue from 'vue';
import App from '@components/App/';
import store from './store';
import {VueMasonryPlugin} from 'vue-masonry';
import VueTruncate from 'vue-truncate-filter';

Vue.use(VueMasonryPlugin);
Vue.use(VueTruncate);

new Vue({
    el: '#app',
    render: (h) => h(App),
    store
});
