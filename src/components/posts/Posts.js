import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/postActions';
import '../../App.css'


class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>

        <div className="head">
          <div>
            <h1>
              Posts
            </h1>
          </div>

          <Link to="/post/add" className="nav-link right">
            <i className="far fa-envelope" /> new post
            </Link>

        </div>

        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.post.posts
});

export default connect(mapStateToProps, { getPosts })(Posts);
