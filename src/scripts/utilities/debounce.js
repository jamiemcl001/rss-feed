export default function debounce(callback, delay) {
    if (!delay) {
        throw new Error('A `delay` property has to be passed to the `debounce` function');
    }

    let lastInvocationTime = 0;

    return function(...args) {
        const newTime = Date.now();
        const timeElapsed = newTime - lastInvocationTime;
        const context = this;

        if (timeElapsed > delay) {
            callback.apply(context, args);
            lastInvocationTime = newTime;
        }
    };
}
