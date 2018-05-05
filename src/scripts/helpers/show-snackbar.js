import store from '@store/';

export default function showSnackbar(message, type, isDismissable) {
    return store.commit('snackbar/show-snackbar', {
        message,
        type,
        dismissable: isDismissable
    }, {
        root: true
    });
};
