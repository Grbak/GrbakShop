import React from 'react';

import style from './Reviews.module.css';

const Reviews = (props) => {

    let comments = props.currentProduct.comments.map(c => <div> {c} </div>);

    let newComment = React.createRef();

    let addComment = () => {
        props.addComment();
    };

    let onCommentChange = () => {
        let text = newComment.current.value;
        props.updateNewCommentText(text);
    };

    return(
        <div className={style.wrapper}>
            <div className={style.newComment}>
                <textarea ref={newComment} value={props.newCommentText} onChange={onCommentChange}/>
                <button onClick={addComment}>Оставить отзыв</button>
            </div>
            <div className={style.comments}>
                {comments}
            </div>
        </div>
    )
};

export default Reviews;