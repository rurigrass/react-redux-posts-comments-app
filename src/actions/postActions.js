import {GET_POSTS, DELETE_POST, ADD_POST} from './types';

export const getPosts = () => async dispatch => {
    dispatch ({
        type: GET_POSTS
    });
};

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    };
};

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    };
};


