import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { replace } from "connected-react-router";
import {
  getPostDetails,
  createComment,
  voteComment,
} from "../../actions/posts";
import {
  MainWrapper,
  MainWrapperComments,
  WrapperPost,
  PostDescription,
  WrapperCreateComment,
  WrapperSubmitComment,
  TextAreaCreateComment,
  WrapperComment,
  ImageVote,
} from "./style";

import Header from "../Header";
import Button from "@material-ui/core/Button";
import arrowUpGrey from "../../img/arrow-up-grey.png";
import arrowUpColor from "../../img/arrow-up-color.png";
import arrowDownGrey from "../../img/arrow-down-grey.png";
import arrowDownColor from "../../img/arrow-down-color.png";
import CircularProgress from "@material-ui/core/CircularProgress";

class PostDetails extends Component {
  state = {
    comment: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const postId = this.props.match.params.id;

    if (token === null) {
      this.props.goToLoginPage();
    }

    if (this.props.getPostDetails && postId && this.props.post === null) {
      this.props.getPostDetails(postId);
    }
  }

  handleInputComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitComment = (e) => {
    e.preventDefault();
    const postId = this.props.match.params.id;
    this.props.createComment(this.state.comment, postId);

    this.setState({ comment: "" });
  };

  handleLikeButton = (commentId, voteDirection) => {
    const postId = this.props.match.params.id;
    if (voteDirection === 0 || voteDirection === -1) {
      this.props.voteComment(1, commentId, postId);
    } else {
      this.props.voteComment(0, commentId, postId);
    }
  };

  handleDislikeButton = (commentId, voteDirection) => {
    const postId = this.props.match.params.id;
    if (voteDirection === 0 || voteDirection === 1) {
      this.props.voteComment(-1, commentId, postId);
    } else {
      this.props.voteComment(0, commentId, postId);
    }
  };

  renderIconLike = (commentId, voteDirection) => {
    if (voteDirection === 0 || voteDirection === -1) {
      return (
        <ImageVote
          src={arrowUpGrey}
          onClick={() => this.handleLikeButton(commentId, voteDirection)}
        />
      );
    } else {
      return (
        <ImageVote
          src={arrowUpColor}
          onClick={() => this.handleLikeButton(commentId, voteDirection)}
        />
      );
    }
  };

  renderIconDislike = (commentId, voteDirection) => {
    if (voteDirection === 0 || voteDirection === 1) {
      return (
        <ImageVote
          src={arrowDownGrey}
          onClick={() => this.handleDislikeButton(commentId, voteDirection)}
        />
      );
    } else {
      return (
        <ImageVote
          src={arrowDownColor}
          onClick={() => this.handleDislikeButton(commentId, voteDirection)}
        />
      );
    }
  };

  render() {
    return (
      <>
        <Header />
        <MainWrapper>
          {this.props.post === null ? (
            <CircularProgress />
          ) : (
            <WrapperPost>
              <h1>{this.props.post.title}</h1>
              <PostDescription>
                <strong>{this.props.post.username}: </strong>
                {this.props.post.text}
              </PostDescription>

              <WrapperCreateComment>
                <label htmlFor="comment">Escreva um comentário</label>
                <WrapperSubmitComment>
                  <TextAreaCreateComment
                    rows="2"
                    name="comment"
                    required
                    value={this.state.comment}
                    onChange={this.handleInputComment}
                  />
                  <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    onClick={this.submitComment}
                  >
                    Comentar
                  </Button>
                </WrapperSubmitComment>
              </WrapperCreateComment>
            </WrapperPost>
          )}
          {this.props.post &&
            this.props.post.comments.map((comment) => {
              return (
                <MainWrapperComments key={comment.id}>
                  <div>
                    {this.renderIconLike(comment.id, comment.userVoteDirection)}
                    <p>{comment.votesCount}</p>
                    {this.renderIconDislike(
                      comment.id,
                      comment.userVoteDirection
                    )}
                  </div>

                  <WrapperComment key={comment.id}>
                    <p>
                      <strong>{comment.username}: </strong>
                      {comment.text}{" "}
                    </p>
                  </WrapperComment>
                </MainWrapperComments>
              );
            })}
        </MainWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (text, postId) => dispatch(createComment(text, postId)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  goToPosts: () => dispatch(replace(routes.posts)),
  voteComment: (direction, commentId, postId) =>
    dispatch(voteComment(direction, commentId, postId)),
  goToLoginPage: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
