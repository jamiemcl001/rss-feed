import date from 'date-and-time';
import striptags from 'striptags';
import imagesLoaded from 'vue-images-loaded';

export default {
    directives: {
        imagesLoaded
    },
    filters: {
        dateFormat(value) {
            return date.format(
                date.parse(value, 'YYYY-MM-DD HH:mm:ss'),
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
