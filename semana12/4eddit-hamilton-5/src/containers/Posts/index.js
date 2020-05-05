import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPosts,
  createPost,
  vote,
  getPostDetails,
} from "../../actions/posts";
import { replace } from "connected-react-router";
import { routes } from "../Router/index";

import Header from "../Header";
import Button from "@material-ui/core/Button";
import arrowUpGrey from "../../img/arrow-up-grey.png";
import arrowUpColor from "../../img/arrow-up-color.png";
import arrowDownGrey from "../../img/arrow-down-grey.png";
import arrowDownColor from "../../img/arrow-down-color.png";
import {
  MainWrapper,
  WrapperCreatePost,
  TextLabel,
  InputCreatePost,
  TextAreaCreatePost,
  WrapperTitle,
  WrapperSearch,
  InputSearchPost,
  MainWrapperPost,
  WrapperVote,
  WrapperPost,
  WrapperButton,
  ImageVote,
} from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

class Posts extends Component {
  state = {
    newPost: {
      text: "",
      title: "",
    },
    filterText: "",
  };

  componentDidMount() {
    this.props.getPosts();
    const token = localStorage.getItem("token");
    if (token === null) {
      this.props.goToLoginPage();
    }
  }

  handleInputCreatePost = (e) => {
    const { name, value } = e.target;

    this.setState({
      newPost: { ...this.state.newPost, [name]: value },
    });
  };

  submitPost = (e) => {
    e.preventDefault();

    this.props.createPost(this.state.newPost);
    this.setState({
      newPost: { text: "", title: "" },
    });
  };

  handleInputSearch = (e) => {
    this.setState({ filterText: e.target.value });
  };

  handleLikeButton = (id, voteDirection) => {
    if (voteDirection === 0 || voteDirection === -1) {
      this.props.vote(1, id);
    } else {
      this.props.vote(0, id);
    }
  };

  handleDislikeButton = (id, voteDirection) => {
    if (voteDirection === 0 || voteDirection === 1) {
      this.props.vote(-1, id);
    } else {
      this.props.vote(0, id);
    }
  };

  renderIconLike = (postId, voteDirection) => {
    if (voteDirection === 0 || voteDirection === -1) {
      return (
        <ImageVote
          src={arrowUpGrey}
          onClick={() => this.handleLikeButton(postId, voteDirection)}
        />
      );
    } else {
      return (
        <ImageVote
          src={arrowUpColor}
          onClick={() => this.handleLikeButton(postId, voteDirection)}
        />
      );
    }
  };

  renderIconDislike = (postId, voteDirection) => {
    if (voteDirection === 0 || voteDirection === 1) {
      return (
        <ImageVote
          src={arrowDownGrey}
          onClick={() => this.handleDislikeButton(postId, voteDirection)}
        />
      );
    } else {
      return (
        <ImageVote
          src={arrowDownColor}
          onClick={() => this.handleDislikeButton(postId, voteDirection)}
        />
      );
    }
  };

  render() {
    const filterPosts = this.props.posts.filter((post) => {
      if (this.state.filterText === "") {
        return post;
      } else {
        const search = this.state.filterText.toLowerCase();
        return post.title && post.title.toLowerCase().includes(search);
      }
    });

    const postsToString = JSON.stringify(this.props.posts)
    return (
      <>
        <Header />
        <MainWrapper>
          <WrapperCreatePost>
            <h1>Criar Post</h1>
            <TextLabel htmlFor="title">Título</TextLabel>
            <InputCreatePost
              required
              type="text"
              name="title"
              value={this.state.newPost.title}
              onChange={this.handleInputCreatePost}
            />
            <br />
            <TextLabel htmlFor="text">Post</TextLabel>
            <TextAreaCreatePost
              required
              type="text"
              name="text"
              rows="5"
              value={this.state.newPost.text}
              onChange={this.handleInputCreatePost}
            />
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              onClick={this.submitPost}
            >
              Enviar
            </Button>
          </WrapperCreatePost>

          <WrapperTitle>
            <h1>Posts:</h1>
          </WrapperTitle>
          <WrapperSearch>
            <p>Buscar post por título: </p>
            <InputSearchPost
            value={this.state.filterText}
            onChange={this.handleInputSearch}
          />
          </WrapperSearch>

          {postsToString === "[]" ? (
            <CircularProgress />
          ) : (
            filterPosts.map((posts) => {
              return (
                <MainWrapperPost key={posts.id}>
                  <WrapperVote key={posts.username}>
                    {this.renderIconLike(posts.id, posts.userVoteDirection)}
                    <p>{posts.votesCount}</p>
                    {this.renderIconDislike(posts.id, posts.userVoteDirection)}
                  </WrapperVote>

                  <WrapperPost key={posts.title}>
                    <h2>{posts.title}</h2>
                    <p>
                      <strong>{posts.username}: </strong> {posts.text}
                    </p>
                  </WrapperPost>

                  <WrapperButton>
                    <Button
                      color="secondary"
                      variant="contained"
                      type="submit"
                      onClick={() => this.props.getPostDetails(posts.id)}
                    >
                      Comentários: {posts.commentsCount}
                    </Button>
                  </WrapperButton>
                </MainWrapperPost>
              );
            })
          )}
        </MainWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  createPost: (post) => dispatch(createPost(post)),
  vote: (direction, id) => dispatch(vote(direction, id)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  goToLoginPage: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
