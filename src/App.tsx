import * as React from "react";
import "./App.css";
import useCursor from "./hooks/useCursor";
import { list } from "./reddit/listing";

const App = () => {
  const [posts, loadNextPosts] = useCursor(
    () =>
      list({
        sort: "hot",
        subreddit: "mechanicalkeyboards"
      }),
    {
      additive: true
    }
  );

  if (posts.length <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        {posts.map(post => (
          <article key={post.id}>
            <h1>{post.title}</h1>
          </article>
        ))}
        <button onClick={loadNextPosts}>Next...</button>
      </>
    );
  }
};

export default App;
