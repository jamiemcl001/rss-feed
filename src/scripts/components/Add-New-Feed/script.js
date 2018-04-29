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
        updateFeedName(newVal) {
            this.feedName = newVal;
        },

        updateFeedUrl(newVal) {
            this.feedUrl = newVal;
        },

        addFeed() {

        }
    }
};
