import React, { useState } from "react";
import { postActions } from "../state/index";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const { createPost } = bindActionCreators(postActions, dispatch);
  // console.log(postList);

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: title,
      body: body,
    };

    createPost(post);
  }

  return (
    <div className="post-form-wrapper">
      <h2>Add a post</h2>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="post-form"
        aria-label="Post form"
      >
        <label>
          Title:
          <input
            type="text"
            name="post title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Body:
          <textarea
            name="post body"
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
