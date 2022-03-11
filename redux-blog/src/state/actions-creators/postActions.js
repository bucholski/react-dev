export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((arrOfPosts) => {
      dispatch({
        type: "FETCH_POSTS",
        payload: arrOfPosts,
      });
    });
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: "NEW_POST",
        payload: post,
      })
    );
};
