import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPost } from '../../actions/postActions';
import uuid from 'uuid';
import '../../App.css';


class AddPost extends Component {
  state = {
    headline: '',
    text: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { headline, text } = this.state;

    // Check For Errors
    if (headline === '') {
      this.setState({ errors: { headline: 'Headline is required' } });
      return;
    }

    if (text === '') {
      this.setState({ errors: { text: 'Text is required' } });
      return;
    }

    const newPost = {
      id: uuid(),
      headline,
      text
    };

    //// SUBMIT POST ////
    this.props.addPost(newPost);


    // Clear State
    this.setState({
      headline: '',
      text: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { headline, text, errors } = this.state;

    return (
      <div className="card mb-3 addPostModal">
        <h2 className="card-title text-center">New post</h2>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              name="headline"
              placeholder="Headline"
              value={headline}
              onChange={this.onChange}
              error={errors.headline}
            />
            <TextInputGroup
              name="text"
              placeholder="Text"
              value={text}
              onChange={this.onChange}
              error={errors.text}
            />
            <div className="head">
              <input
                type="submit"
                value="save"
                className="btn btn-outline-secondary"
              />
              <Link to="/" className="nav-link btn btn-outline-secondary right">
                cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

addPost.proptypes = {
  addPost: Proptypes.func.isRequired
}

export default connect(null, { addPost })(AddPost);
