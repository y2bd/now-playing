import * as React from "react";
import { ListingData } from "../reddit/listing";
import "./Post.css";

const Post = React.memo((post: ListingData) => {
  const [opened, setOpened] = React.useState(false);

  const onClick = React.useCallback(
    () => {
      if (post.is_self) {
        setOpened(!opened);
      } else {
        window.open(post.url);
      }
    },
    [opened, post.url]
  );

  return (
    <>
      {opened && <div className="Overlay" onClick={onClick} />}
      <article key={post.id} className={"Post " + (opened ? "Open" : "")}>
        <h1 onClick={onClick}>{post.title}</h1>
        {opened && (
          <div
            dangerouslySetInnerHTML={{ __html: htmlDecode(post.selftext_html) }}
          />
        )}
        <aside>
          <span className="Date">{dateString(post.created_utc)}</span>
          <span className="Domain">{post.domain}</span>
        </aside>
      </article>
    </>
  );
});

function htmlDecode(input: string) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent || "";
}

function dateString(time: number) {
  const date: Date = new Date(time * 1000);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hour = String(date.getHours());
  const minute = String(date.getMinutes());
  if (Date.now() - date.getTime() > 1000 * 60 * 60 * 24) {
    return `${year}-${padStart(month, 2, "0")}-${padStart(day, 2, "0")}`;
  } else {
    return `${padStart(hour, 2, "0")}:${padStart(minute, 2, "0")}`;
  }
}

function padStart(str: string, count: number, char: string) {
  while (str.length + char.length <= count) {
    str = char + str;
  }

  return str;
}

export default Post;
