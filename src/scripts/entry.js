import Vue from 'vue';
import App from '@components/App/';
import store from './store';
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin);

new Vue({
    el: '#app',
    render: (h) => h(App),
    store
});
