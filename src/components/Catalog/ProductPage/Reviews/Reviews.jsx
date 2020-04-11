import React from 'react';
import moment from 'moment';

import style from './Reviews.module.css';
import Comment from './Comment/Comment';

const Reviews = (props) => {

    let comments = props.currentProduct.comments.map(c => <Comment text={c.text} time={c.time}/>);

    let newComment = React.createRef();

    let addComment = () => {
        let currentMoment = moment();
        props.addComment(props.currentProduct.productId, currentMoment);
    };

    let onCommentChange = (event) => {
        let text = newComment.current.value;
        props.onCommentChange(text);
    };

    return(
        <div className={style.wrapper}>
            <div className={style.newComment}>
                <textarea ref={newComment} value={props.newCommentText} onChange={(event) => onCommentChange(event)}/>
                <button className={style.addComment} onClick={addComment}>Оставить отзыв</button>
            </div>
            <h3>Отзывы</h3>
            <div className={style.comments}>
                {comments}
            </div>
        </div>
    )
};

export default Reviews;