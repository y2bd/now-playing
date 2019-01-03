import * as React from "react";
import "./App.css";
import Post from "./components/Post";
import useCursor from "./hooks/useCursor";
import { Sort } from "./reddit/listing";
import { list } from "./server/listingProxy";

const subreddit = "frugalmalefashion";
const sort: Sort = "hot";

const App = () => {
  const [posts, loadNextPosts, isLoading] = useCursor(
    () =>
      list({
        sort,
        subreddit
      }),
    {
      additive: true
    }
  );

  const loadNext = React.useCallback(
    (evt: React.MouseEvent) => {
      loadNextPosts();

      evt.stopPropagation();
      evt.preventDefault();
    },
    [loadNextPosts]
  );

  if (posts.length <= 0) {
    return <p className="Loading">loading...</p>;
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
