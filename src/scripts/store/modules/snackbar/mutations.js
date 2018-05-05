import Vue from 'vue';

export default {
    'hide-snackbar'(state, payload) {
        Vue.set(state, 'dismissable', '');
        Vue.set(state, 'message', '');
        Vue.set(state, 'type', '');
        Vue.set(state, 'visible', false);
    },
    'show-snackbar'(state, payload) {
        Vue.set(state, 'dismissable', payload.dismissable);
        Vue.set(state, 'message', payload.message);
        Vue.set(state, 'type', payload.type);
        Vue.set(state, 'visible', true);
    }
};
