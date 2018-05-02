import date from 'date-and-time';
import striptags from 'striptags';

export default {
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
        launchArticleInNewWindow() {
            window.open(this.article.link);
        }
    }
};
