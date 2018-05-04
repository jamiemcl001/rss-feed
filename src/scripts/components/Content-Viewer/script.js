import orderby from 'lodash.orderby';
import Vue from 'vue';
import ArticleCard from '@components/Article-Card/index.vue';

export default {
    components: {
        'Article-Card': ArticleCard
    },
    computed: {
        orderedArticles() {
            Vue.nextTick().then(() => {
                this.$redrawVueMasonry();
            });

            return orderby(this.visibleArticles, 'pubDateMilliseconds')
                .reverse();
        },
        visibleArticles() {
            return this.$store.getters['feeds/visibleFeeds']
                .reduce((acc, val) => [...acc, ...val.feedContent], []);
        }
    },
    methods: {
        forceRedraw() {
            this.$redrawVueMasonry();
        }
    }
};
