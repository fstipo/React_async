import React, { useState, useEffect } from 'react';
import { fetchPosts } from './Api';

const ProfilePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((post) => setPosts(post))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Last posts</strong>
      </li>
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default ProfilePosts;
