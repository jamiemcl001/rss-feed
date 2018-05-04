import axios from 'axios';
import md5 from 'md5';
import format from 'string-format';
import GLOBAL_CONSTANTS from '@constants/global-constants';

export default {
    'add-feed'(context, {feedName, feedUrl}) {
        if (context.state.some((item) => item.feedName === feedName)) {
            return console.error(''); // do something with the snackbar here
        } else if (context.state.some((item) => item.feedUrl === feedUrl)) {
            return console.error(''); // do something with the snackbar here
        }

        axios.get(format(GLOBAL_CONSTANTS.RSS2JSON_API_URL, {
                feedUrl: escape(feedUrl),
                apiKey: GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                count: GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS
            }))
            .then((response) => {
                return context.commit('add-feed', {
                    id: md5(response.data.feed.url),
                    feedContent: response.data.items,
                    feedName,
                    feedUrl: response.data.feed.url
                });
            })
            .catch((e) => console.error(e)); // do something with the snackbar here
    },

    'fetch-latest-items'(context) {
        context.state.forEach((item) => {
            return axios.get(format(GLOBAL_CONSTANTS.RSS2JSON_API_URL, {
                feedUrl: escape(item.feedUrl),
                apiKey: GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                count: GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS
            })).then(({data}) => {
                context.commit('replace-feed-contents', {
                    feed: item.id,
                    content: data.items
                });
            });
        });
    },
};
