import parse from 'date-fns/parse';
import Vue from 'vue';

function mapFeedContents(feedName, feedContentsArray) {
    return feedContentsArray.map((item) => ({
        description: item.description,
        feedName: feedName,
        link: item.link,
        pubDate: item.pubDate,
        pubDateMilliseconds: parse(item.pubDate, 'YYYY-MM-DD HH:mm:ss', new Date()).getTime(),
        thumbnail: item.thumbnail,
        title: item.title
    }));
}

export default {
    'add-feed'(state, payload) {
        debugger;
        state.push({
            ...payload,
            feedContent: mapFeedContents(payload.feedName, payload.feedContent),
            isFocussed: false
        });

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'append-feed-contents'(state, payload) {
        const feedIndex = state.findIndex((item) => item.id === payload.feed);
        const itemsToAppend = payload.content.slice(state[feedIndex].feedContent.length,
            payload.content.length);

        state[feedIndex].feedContent.splice(state[feedIndex].feedContent.length, 0,
            ...mapFeedContents(state[feedIndex].feedName, itemsToAppend));
    },

    'delete-feed'(state, payload) {
        state.splice(state.findIndex((item) => item.id === payload), 1);

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'replace-feed-contents'(state, payload) {
        const feedIndex = state.findIndex((item) => item.id === payload.feed);

        state[feedIndex].feedContent.splice(0, state[feedIndex].feedContent.length,
            ...mapFeedContents(state[feedIndex].feedName, payload.content)
        );
    },

    'toggle-focussed'(state, payload) {
        const itemIndex = state.findIndex((item) => item.id === payload);

        Vue.set(state[itemIndex], 'isFocussed', !state[itemIndex].isFocussed);
    }
};
