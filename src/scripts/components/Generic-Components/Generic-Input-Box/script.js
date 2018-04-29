export default {
    data() {
        return {
            internalModel: ''
        };
    },
    props: [
        'onChange',
        'placeholderText'
    ],
    watch: {
        internalModel(newVal, oldVal) {
            this.$emit('valueChanged', newVal, oldVal);
        }
    }
};
