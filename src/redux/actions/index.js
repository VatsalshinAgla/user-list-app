export const deleteUser = (id) => {
    return {type: 'DELETE_USER',payload: id}
}
export const addSelectedUser = (user) => {
    return {type: 'ADD_SELECTED_USER',payload: user}
}