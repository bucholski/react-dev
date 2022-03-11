import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="post">
      <div className="post__header">
        <h3 className="post__title">{title}</h3>
        <p className="post__subtitle"></p>
      </div>
      <p className="post__body">{body}</p>
    </div>
  );
};

export default Post;
