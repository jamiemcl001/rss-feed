export default {
    computed: {
        snackbar() {
            return this.$store.state.snackbar;
        },
        snackbarType() {
            return typeof this.$store.state.snackbar.type === 'object' ?
                this.$store.state.snackbar.type.className :
                '';
        }
    },
    data() {
        return {
            dismissTimeout: 0
        };
    },
    methods: {
        dismiss() {
            window.clearTimeout(this.dismissTimeout);
            this.dismissTimeout = 0;
            this.$store.commit('snackbar/hide-snackbar');
        }
    },
    props: {
        duration: {
            default: 5000
        }
    },
    watch: {
        '$store.state.snackbar.visible'(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.dismissTimeout = window.setTimeout(
                    () => this.$store.commit('snackbar/hide-snackbar'),
                    this.duration);
            }
        }
    }
};
