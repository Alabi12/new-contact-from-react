
const initialstate = {
    user: [{
        firstname: "Robert",
        lastname: "Alabi",
        email: "ralabi@gmail.com",
        contact: "024552336"
    }],
}

const UserReducer = (state={initialstate}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return state
            default:
                return state;
    }
}

export default UserReducer;
