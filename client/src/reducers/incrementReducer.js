export default (state = 0, actions) => {
    switch (actions.type) {
        case 'increment':
            return state + 1;
        default:
            return state;
    };
};