import md5 from 'md5';
import format from 'string-format';
import GLOBAL_CONSTANTS from '@constants/global-constants';
import {SNACKBAR_TYPES} from '@components/Snackbar/snackbar-types';
import showSnackbar from '@helpers/show-snackbar';

export default {
    'add-feed'(context, {feedName, feedUrl}, rootContext) {
        if (context.state.some((item) => item.feedName === feedName)) {
            return showSnackbar(`Duplicate feed name detected - please use another`, SNACKBAR_TYPES.INFO, true);
        } else if (context.state.some((item) => item.feedUrl === feedUrl)) {
            return showSnackbar(`Duplicate feed URL detected - please use another`, SNACKBAR_TYPES.INFO, true);
        }

        return fetch(format(GLOBAL_CONSTANTS.RSS2JSON_API_URL, {
                feedUrl: escape(feedUrl),
                apiKey: GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                count: GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS
            }))
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
            return fetch(format(GLOBAL_CONSTANTS.RSS2JSON_API_URL, {
                feedUrl: escape(item.feedUrl),
                apiKey: GLOBAL_CONSTANTS.RSS2JSON_API_KEY,
                count: GLOBAL_CONSTANTS.RSS2JSON_DEFAULT_NUM_ITEMS
            }))
            .then((response) => response.json())
            .then((data) => {
                context.commit('replace-feed-contents', {
                    feed: item.id,
                    content: data.items
                });
            });
        });
    },
};
