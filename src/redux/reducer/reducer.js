var initialState = {
    loading: true,
    users: [
        {
            id: 1,
            first_name: 'Peaky1',
            last_name: 'Blinder1',
            email: 'john1@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Active",
            role: "Owner"
        },
        {   id: 2,
            first_name: 'Peaky2',
            last_name: 'Blinder2',
            email: 'john2@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            id: 3,
            first_name: 'Peaky22',
            last_name: 'Blinder22',
            email: 'john22@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {   
            id: 4,
            first_name: 'Peaky34',
            last_name: 'Blinde34r',
            email: 'john34@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            id: 5,
            first_name: 'Peaky45',
            last_name: 'Blinder545',
            email: 'john343@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            id: 6,
            first_name: 'Peak34y',
            last_name: 'Blinder34',
            email: 'john35@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
 
    ]
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case "DELETE_USER":
            let selectUser = state.selectedUser;
            if (selectUser && selectUser.id === action.payload) {
                selectUser = null;
            }
            let userList = [...state.users];
            userList = userList.filter((user) => {
                return !(user.id === action.payload)
            })
            return { ...state, users: userList, selectedUser: selectUser };
        default: return state;
        case "ADD_SELECTED_USER": return { ...state, selectedUser: action.payload };
    }
}
export default reducer;