export const itemUserIncrement = (items) => {
    return (dispatch) => {
        dispatch(
            {
                type: "itemIncrement",
                payload: items
            }
        )
    }
}
export const itemUserDecrement = (items) => {
    return (dispatch) => {
        dispatch({
            type: "itemDecrement",
            payload: items
        })
    }
}
