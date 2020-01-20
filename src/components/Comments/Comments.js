import React, { Component } from 'react';

class Comments extends Component {
    author = React.createRef();
    comment = React.createRef();
    commentForm = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        const { postId } = this.props.match.params;
        this.props.addComment(postId, this.author.current.value, this.comment.current.value);
        this.commentForm.current.reset();
    }

    renderComments = (comment, index) => (
        <div className="comment" key={index}>
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button
                    onClick={() => this.props.removeComment(this.props.match.params.postId, index)}
                    className='remove-comment'
                >&times;</button>
            </p>
        </div>)

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComments)}
                <form
                    ref={this.commentForm}
                    className="comment-form"
                    onSubmit={this.handleSubmit}
                >
                    <input type="text" ref={this.author} placeholder='author' />
                    <input type="text" ref={this.comment} placeholder='comment' />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;