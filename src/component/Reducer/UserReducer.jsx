import { ADD_USER, DELETE_USER, EDIT_USER } from "../../actions/userActions";

const initialstate = {
    user: [{
        firstname: "Robert",
        lastname: "Alabi",
        email: "ralabi@gmail.com",
        contact: "024552336",
        id: "02335125.266"
    }],
}

const UserReducer = (state = {initialstate}, action) => {
    switch (action.type) {
        // case ADD_USER:
        //     return { ...state.users, users: [...state.users, action.payload] };
            case DELETE_USER:
                const savedUsers = state.users.filter((user) => {
                  return user.id !== action.payload;
                });
                  return{...state, users: savedUsers };
              case EDIT_USER:
                return {...state, users: state.users.map((user) =>
                  user.id === action.payload.id ? action.payload : user
                )}
            default:
                return state;
    }
};

export default UserReducer;
