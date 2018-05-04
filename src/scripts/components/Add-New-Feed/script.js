import GenericButton from '@components/Generic-Components/Generic-Button/index.vue';
import GenericInputBox from '@components/Generic-Components/Generic-Input-Box/index.vue';

export default {
    components: {
        'Generic-Button': GenericButton,
        'Generic-Input-Box': GenericInputBox
    },
    data() {
        return {
            feedName: '',
            feedUrl: ''
        };
    },
    methods: {
        clearInputs() {
            this.$refs.feedNameInput.resetInput();
            this.$refs.feedUrlInput.resetInput();
        },

        onClick() {
            if (!this.validate()) return;

            this.$store.dispatch('feeds/add-feed', {
                feedName: this.feedName || 'BBC Tech',
                feedUrl: this.feedUrl
            }).then(() => this.clearInputs());
        },

        updateFeedName(newVal) {
            this.feedName = newVal;
        },

        updateFeedUrl(newVal) {
            this.feedUrl = newVal;
        },

        validate() {
            return true;
        }
    }
};
