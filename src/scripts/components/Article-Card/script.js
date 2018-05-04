import format from 'date-fns/format';
import parse from 'date-fns/parse';
import striptags from 'striptags';
import imagesLoaded from 'vue-images-loaded';

export default {
    directives: {
        imagesLoaded
    },
    filters: {
        dateFormat(value) {
            return format(
                parse(value, 'YYYY-MM-DD HH:mm:ss', new Date()),
                'MMM DD YYYY | HH:mm'
            );
        },

        stripTags(value) {
            return striptags(value);
        }
    },
    props: ['article'],
    methods: {
        imageDownloaded() {
            this.$emit('forceLayoutRedraw');
        },
        launchArticleInNewWindow() {
            window.open(this.article.link);
        }
    }
};
