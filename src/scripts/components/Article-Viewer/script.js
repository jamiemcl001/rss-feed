import orderby from 'lodash.orderby';
import Vue from 'vue';
import ArticleCard from '@components/Article-Card/index.vue';
import debounce from '@utilities/debounce';

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
        debouncedScrollHandler: debounce(function() {
            this.$store.dispatch('feeds/fetch-older-items');
        }, 1000),

        scrollHandler({target}) {
            if ((target.scrollTop + target.clientHeight) === target.scrollHeight) {
                this.debouncedScrollHandler();
            }
        },

        forceRedraw() {
            this.$redrawVueMasonry();
        }
    }
};
