import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from '../Photo/Photo';
import * as actions from '../../store/actions/';

class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) =>{
                    return (<Photo
                        {...this.props}
                        post={post}
                        index={index}
                        key={index}
                />)})
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);