import Vue from 'vue';

export default {
    data() {
        return {
            internalModel: ''
        };
    },
    methods: {
        clearInput() {
            Vue.set(this, 'internalModel', '');
        }
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
