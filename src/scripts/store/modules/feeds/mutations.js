export default {
    'add-feed'(state, payload) {
        state.push({
            ...payload,
            isActive: true
        });
    },

    'delete-feed'(state, payload) {
        state.splice(state.findIndex((item) => item.id === payload), 1);
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
