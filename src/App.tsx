import * as React from "react";
import "./App.css";
import Post from "./components/Post";
import useCursor from "./hooks/useCursor";
import { list, Sort } from "./reddit/listing";

const subreddit = "frugalmalefashion";
const sort: Sort = "hot";

const App = ({ token }: { token: string }) => {
  const [posts, loadNextPosts, isLoading] = useCursor(
    () =>
      list({
        sort,
        subreddit,
        token
      }),
    {
      additive: true
    }
  );

  const loadNext = React.useCallback(
    (evt: React.MouseEvent) => {
      console.log("Load next posts");
      loadNextPosts();

      evt.stopPropagation();
      evt.preventDefault();
    },
    [loadNextPosts]
  );

  if (posts.length <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="App">
        <p className="Header">{`/r/${subreddit} • ${sort}`}</p>
        {posts.map(post => (
          <Post {...post} />
        ))}
        {isLoading ? (
          <a href="#" className="loading">
            loading...
          </a>
        ) : (
          <a href="#nextPosts" className="next" onClick={loadNext}>
            next
          </a>
        )}
      </div>
    );
  }
};

export default App;
