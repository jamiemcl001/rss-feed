import parse from 'date-fns/parse';
import Vue from 'vue';

export default {
    'add-feed'(state, payload) {
        state.push({
            ...payload,
            feedContent: payload.feedContent.map((item) => ({
                description: item.description,
                feedName: payload.feedName,
                link: item.link,
                pubDate: item.pubDate,
                pubDateMilliseconds: parse(item.pubDate, 'YYYY-MM-DD HH:mm:ss', new Date()).getTime(),
                thumbnail: item.thumbnail,
                title: item.title
            })),
            isFocussed: false
        });

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'delete-feed'(state, payload) {
        state.splice(state.findIndex((item) => item.id === payload), 1);

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'replace-feed-contents'(state, payload) {
        const itemIndex = state.findIndex((item) => item.id === payload.feed);

        Vue.set(state, itemIndex, {
            ...state[itemIndex],
            feedContent: payload.content.map((item) => ({
                description: item.description,
                feedName: state[itemIndex].feedName,
                link: item.link,
                pubDate: item.pubDate,
                pubDateMilliseconds: parse(item.pubDate, 'YYYY-MM-DD HH:mm:ss', new Date()).getTime(),
                thumbnail: item.thumbnail,
                title: item.title
            }))
        });
    },

    'toggle-focussed'(state, payload) {
        const itemIndex = state.findIndex((item) => item.id === payload);

        Vue.set(state, itemIndex, {
            ...state[itemIndex],
            isFocussed: !state[itemIndex].isFocussed
        });
    }
};
