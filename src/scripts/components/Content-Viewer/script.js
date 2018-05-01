import ArticleCard from '@components/Article-Card/index.vue';

export default {
    components: {
        'Article-Card': ArticleCard
    },
    computed: {
        visibleArticles() {
            return this.$store.state.feeds
                .filter((feed) => feed.isActive)
                .reduce((acc, val) => [...acc, ...val.feedContent], []);
        }
    },
    data() {
        return {
            numberOfColumns: 0
        };
    }
};
