import React from 'react';

import Reviews from './Reviews';
import { updateNewCommentTextActionCreator, addCommentActionCreator } from '../../../../redux/catalogReducer';

const ReviewsContainer = (props) => {

    let addComment = () => {
        props.store.dispatch(addCommentActionCreator(props.currentProduct.productId));
    };

    let onCommentChange = (text) => {
        props.store.dispatch(updateNewCommentTextActionCreator(text));
    };

    return(<Reviews newCommentText={props.store.getState().catalogPage.newCommentText} addComment={addComment} updateNewCommentText={onCommentChange} currentProduct={props.currentProduct}/>);
};

export default ReviewsContainer;