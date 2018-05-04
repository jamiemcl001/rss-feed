export default {
    visibleFeeds(state) {
        return state.some((feed) => feed.isFocussed) ?
            state.filter((feed) => feed.isFocussed) :
            state;
    }
};
