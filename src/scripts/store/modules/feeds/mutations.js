import date from 'date-and-time';
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
                pubDateMilliseconds: date.parse(item.pubDate, 'YYYY-MM-DD HH:mm:ss').getTime(),
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

    'toggle-focussed'(state, payload) {
        const itemIndex = state.findIndex((item) => item.id === payload);

        Vue.set(state, itemIndex, {
            ...state[itemIndex],
            isFocussed: !state[itemIndex].isFocussed
        });
    }
};
