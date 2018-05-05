import md5 from 'md5';
import format from 'string-format';
import GLOBAL_CONSTANTS from '@constants/global-constants';
import {SNACKBAR_TYPES} from '@components/Snackbar/snackbar-types';
import showSnackbar from '@helpers/show-snackbar';

function generateApiRequestUrl(url, apiKey, count) {
    return format(GLOBAL_CONSTANTS.RSS2JSON_API_URL, {
        feedUrl: escape(url),
        apiKey: apiKey,
        count: count
    });
}

export default {
    'add-feed'(context, {feedName, feedUrl}, rootContext) {
        if (context.state.some((item) => item.feedName === feedName)) {
            return showSnackbar(`Duplicate feed name detected - please use another`, SNACKBAR_TYPES.INFO, true);
        } else if (context.state.some((item) => item.feedUrl === feedUrl)) {
            return showSnackbar(`Duplicate feed URL detected - please use another`, SNACKBAR_TYPES.INFO, true);
        }

        return fetch(generateApiRequestUrl(feedUrl, GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS))
            .then((response) => response.json())
            .then((data) => {
                showSnackbar(`Feed ${feedName} was successfully added`, SNACKBAR_TYPES.INFO, true);

                return context.commit('add-feed', {
                    id: md5(data.feed.url),
                    feedContent: data.items,
                    feedName,
                    feedUrl: data.feed.url
                });
            })
            .catch((e) => showSnackbar(`An error occurred trying to add ${feedName}`, SNACKBAR_TYPES.ERROR, true));
    },

    'fetch-latest-items'(context) {
        context.state.forEach((item) => {
            return fetch(generateApiRequestUrl(item.feedUrl, GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS))
            .then((response) => response.json())
            .then((data) => {
                context.commit('replace-feed-contents', {
                    feed: item.id,
                    content: data.items
                });
            });
        });
    },

    'fetch-older-items'(context) {
        context.state.forEach((item) => {
            return fetch(generateApiRequestUrl(item.feedUrl, GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                item.feedContent.length + GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS))
            .then((response) => response.json())
            .then((data) => {
                context.commit('append-feed-contents', {
                    feed: item.id,
                    content: data.items
                });
            });
        });
    }
};
