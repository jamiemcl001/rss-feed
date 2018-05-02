import orderby from 'orderby';
import FeedItem from '@components/Feed-Item/index.vue';
import GenericButton from '@components/Generic-Components/Generic-Button/index.vue';
import GenericInputBox from '@components/Generic-Components/Generic-Input-Box/index.vue';

export default {
    components: {
        'Feed-Item': FeedItem,
        'Generic-Button': GenericButton,
        'Generic-Input-Box': GenericInputBox
    },
    computed: {
        feeds() {
            return orderby(
                this.$store.state.feeds
                    .filter((item) => new RegExp(this.appliedSearchFilter, 'gi').test(item.feedName)),
                'feedName'
            );
        }
    },
    data() {
        return {
            appliedSearchFilter: '',
            searchFilter: ''
        };
    },
    methods: {
        filterItems() {
            this.appliedSearchFilter = this.searchFilter;
        },
        updateSearchModel(newValue) {
            this.searchFilter = newValue;
        }
    }
};
