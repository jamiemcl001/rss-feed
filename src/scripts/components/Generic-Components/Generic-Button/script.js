export default {
    methods: {
        onClick() {
            this.$emit('pressed');
        }
    },
    props: [
        'buttonText'
    ]
};
