import {connect} from 'react-redux';

import Reviews from './Reviews';
import { updateNewCommentText, addComment} from '../../../../redux/catalogReducer';


let mapStateToProps = (state) => {
    return {
        newCommentText: state.catalogPage.newCommentText,
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        addComment: (productId, time) => {
            dispatch(addComment(productId, time));
        },
        
        onCommentChange: (text) => {
            dispatch(updateNewCommentText(text));
        },
    }
 };


const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;