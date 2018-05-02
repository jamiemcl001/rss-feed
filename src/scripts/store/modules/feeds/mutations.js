import date from 'date-and-time';

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
            isActive: true
        });

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'delete-feed'(state, payload) {
        state.splice(state.findIndex((item) => item.id === payload), 1);

        window.localStorage.setItem('feeds', JSON.stringify(state));
    },

    'toggle-filtered'(state, payload) {
        const item = state.find((item) => {
            return item.id === payload;
        });

        if (item.isActive) {
            state.map((item) => ({
                ...item,
                isActive: true
            }));
        }

        state.map((item) => ({
            ...item,
            isActive: item.id === payload
        }));
    }
};
