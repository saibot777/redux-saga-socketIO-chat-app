import * as actions from '../actions';

const messages = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_MESSAGE:
            return;
        case actions.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ]);

        default:
            return state

    }
};

export default messages;