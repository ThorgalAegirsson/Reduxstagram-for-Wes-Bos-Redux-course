import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Photo extends Component {
    render() {
        const { post, index, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className='grid-photo' />
                    </Link>

                    <TransitionGroup>
                        <CSSTransition
                            className='likes-heart'
                            timeout={500}
                            key={post.likes}
                        >
                            <span key={post.likes} className="likes-heart">
                                {post.likes}
                            </span>
                        </CSSTransition>
                    </TransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button
                            onClick={()=>this.props.incrementLikes(index)}
                            className="likes"
                        >&hearts; {post.likes}</button>
                        <Link className='button' to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble">
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

export default Photo;