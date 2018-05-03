import orderby from 'orderby';
import Vue from 'vue';
import ArticleCard from '@components/Article-Card/index.vue';

export default {
    components: {
        'Article-Card': ArticleCard
    },
    computed: {
        orderedArticles() {
            return orderby(this.visibleArticles, 'pubDateMilliseconds');
        },
        visibleArticles() {
            Vue.nextTick().then(() => {
                this.$redrawVueMasonry();
            });

            return this.$store.state.feeds
                .filter((feed) => feed.isActive)
                .reduce((acc, val) => [...acc, ...val.feedContent], []);
        }
    }
};
