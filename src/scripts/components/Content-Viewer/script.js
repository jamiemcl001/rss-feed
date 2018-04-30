// import ResizeObserver from 'resize-observer-polyfill';

export default {
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
