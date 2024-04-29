export const itemUser = (state = 0, action) => {
    if (action.type === 'itemIncrement') {
        return state + action.payload + 1
    }
    else if (action.type === "itemDecrement") {
        return state - action.payload - 1
    }
    else {
        return state;
    }
}

