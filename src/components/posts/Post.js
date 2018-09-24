import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';

class Post extends Component {
  state = {
    showPostInfo: false
  };

  onDeleteClick = id => {
    this.props.deletePost(id);
  };

  render() {
    const { id, headline, text } = this.props.post;
    const { showPostInfo } = this.state;

    return (
      <div className="card card-body mb-3" onClick={() =>
        this.setState({
          showPostInfo: !this.state.showPostInfo
        })
      }>
        <h3>
          {headline}
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`post/edit/${id}`}>
            <i
              className="fas fa-comment-dots"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h3>
        {showPostInfo ? (
          <ul className="list-group">
            <h6>{text}</h6>
          </ul>
        ) : null}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default connect(null, { deletePost })(Post);
