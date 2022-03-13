import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../state/index.js";
import { bindActionCreators } from "redux";

const Posts = () => {
  const [postState, setPostState] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const postList = useSelector((postState) => postState);

  useEffect(() => {
    postList.posts.items.push(postList.posts.item);
    setPostState(!postState);
  }, [postList.posts.item]);

  // const dispatch = useDispatch();
  // const { fetchPosts } = bindActionCreators(postActions, dispatch);
  const { fetchPosts } = bindActionCreators(postActions, useDispatch());

  function populatePosts() {
    return postList.posts.items
      .map((post) => <Post key={post.id} title={post.title} body={post.body} />)
      .reverse();
  }

  return (
    <section className="posts-wrapper">
      <h2 className="section-title">Posts</h2>
      {populatePosts()}
    </section>
  );
};

export default Posts;
