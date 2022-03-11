import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../state/index.js";
import { bindActionCreators } from "redux";
import Post from "./Post";

const Posts = () => {
  const [postState, setPostState] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const postList = useSelector((postState) => postState);

  useEffect(() => {
    postList.posts.items.unshift(postList.posts.item);
    setPostState(!postState);
  }, [postList.posts.item]);

  const dispatch = useDispatch();
  const { fetchPosts } = bindActionCreators(postActions, dispatch);
  console.log(postList);

  function populatePosts() {
    return postList.posts.items.map((post) => (
      <Post key={post.id} title={post.title} body={post.body} />
    ));
  }

  return (
    <div className="posts-wrapper">
      <h2>Posts</h2>
      <hr />
      {populatePosts()}
    </div>
  );
};

export default Posts;
