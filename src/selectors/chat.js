import * as actions from '../actions';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: actions.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const addUser = name => ({
    type: actions.ADD_USER,
    id: nextUserId++,
    name
});

export const messageReceived = (message, author) => ({
   type: actions.MESSAGE_RECEIVED,
   id: nextMessageId++,
   message,
   author
});

export const populateUsersList = users => ({
    type: actions.USERS_LIST,
    users
});
