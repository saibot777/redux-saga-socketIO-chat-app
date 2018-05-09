import * as actions from '../actions';

const users = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_USER:
            return state.concat([
                {
                    name: action.name,
                    id: action.id
                }
            ]);
        case actions.USERS_LIST:
            return action.user
        default:
            return state

    }
};

export default users;