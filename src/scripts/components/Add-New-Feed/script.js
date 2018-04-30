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
        onClick() {
            if (!this.validate()) return;

            this.$store.dispatch('feeds/add-feed', {
                feedName: this.feedName || 'BBC Tech',
                feedUrl: this.feedUrl || 'http://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk'
            });
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
