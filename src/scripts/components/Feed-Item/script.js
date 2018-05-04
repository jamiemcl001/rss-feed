export default {
    methods: {
        deleteFeed() {
            this.$store.commit('feeds/delete-feed', this.item.id);
        },
        toggleFilter() {
            this.$store.commit('feeds/toggle-focussed', this.item.id);
        }
    },
    props: [
        'item',
        'elementIndex'
    ]
};
