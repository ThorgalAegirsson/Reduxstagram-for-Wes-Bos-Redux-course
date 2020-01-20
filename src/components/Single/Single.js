import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../Photo/Photo';
import Comments from '../Comments/Comments';

import * as actions from '../../store/actions/';

class Single extends Component {
    render() {
        const index = this.props.posts.findIndex(post => post.code === this.props.match.params.postId);
        const post = this.props.posts[index];
        return (
            <div className="single-photo">
                <Photo post={post} index={index} {...this.props} />
                <Comments />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    incrementLikes: (index) => dispatch(actions.incrementLikes(index)),
    addComment: (postId, author, comment) => dispatch(actions.addComment(postId, author, comment)),
    removeComment: (postId, index) => dispatch(actions.removeComment(postId, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);