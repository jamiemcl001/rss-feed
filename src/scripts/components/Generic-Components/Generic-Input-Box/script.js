import Vue from 'vue';

export default {
    data() {
        return {
            internalModel: ''
        };
    },
    methods: {
        resetInput() {
            Vue.set(this, 'internalModel', '');
        }
    },
    props: [
        'placeholderText'
    ],
    watch: {
        internalModel(newVal, oldVal) {
            this.$emit('valueChanged', newVal, oldVal);
        }
    }
};
