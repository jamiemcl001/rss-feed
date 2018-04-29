import GenericButton from '@components/Generic-Components/Generic-Button/index.vue';
import GenericInputBox from '@components/Generic-Components/Generic-Input-Box/index.vue';

export default {
    components: {
        'Generic-Button': GenericButton,
        'Generic-Input-Box': GenericInputBox
    },
    computed: {
        feeds() {
            return this.$store.state.feeds;
        }
    }
};
