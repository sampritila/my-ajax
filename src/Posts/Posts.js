import React    from "react";
import template from "./Posts.jsx";

class Posts extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Posts;
