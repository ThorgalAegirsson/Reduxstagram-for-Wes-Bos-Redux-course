import * as actionTypes from './actionTypes';

export const incrementLikes = index => ({
    type: actionTypes.INCREMENT_LIKES,
    index
});

export const addComment = (postId, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    postId,
    author,
    comment
});

export const removeComment = (postId, index) => ({
    type: actionTypes.REMOVE_COMMENT,
    postId,
    index
});
