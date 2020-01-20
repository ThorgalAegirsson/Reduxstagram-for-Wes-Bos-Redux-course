import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/';

import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Single from './components/Single/Single';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>
            <Link to='/'>Reduxstagram</Link>
          </h1>
          <Switch>
            <Route path='/view/:postId' component={Single} />
            <Route exact path='/' component={PhotoGrid} />
          </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
