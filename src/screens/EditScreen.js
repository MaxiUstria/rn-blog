import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      title={blogPost.title}
      content={blogPost.content}
      onSubmit={(title, content) =>
        editBlogPost(blogPost.id, title, content, () => navigation.pop())
      }
    />
  );
};

export default EditScreen;
