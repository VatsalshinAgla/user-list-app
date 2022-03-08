var initialState = {
    loading: true,
    users: [
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Active",
            role: "Owner"
        },
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
        {
            first_name: 'Peaky',
            last_name: 'Blinder',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Inactive",
            role: "Read"
        },
 
 
    ]
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
       
        default: return state;
    }
}
export default reducer;