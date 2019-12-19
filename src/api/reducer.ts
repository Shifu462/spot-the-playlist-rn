export default function reducer(state = { token: '' }, action) {
    switch (action.type) {
        case ACTION.SET_TOKEN:
            state.token = action;
            return state;
        default:
            return state;
    }
}

export enum ACTION {
    SET_TOKEN = 'SET_TOKEN',
}