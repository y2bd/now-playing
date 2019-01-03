import * as React from "react";
import App from "./App";
import { id, secret } from "./secret";

// tslint:disable-next-line:no-var-requires
const foo = require("react-oauth-flow");

const renderSender = ({ url }: { url: string }) => (
  <a href={url}>Connect to Reddit</a>
);

const renderReceiver = ({ processing, error }: any) => (
  <div>
    {processing && <p>Authorizing now...</p>}
    {error && <p className="error">An error occured: {error.message}</p>}
  </div>
);

const handleError = (error: Error) => {
  console.error("An error occured");
  console.error(error.message);
};

const OAuthApp = () => {
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const handleSuccess = (accessToken: string) => {
    setToken(accessToken);
  };

  return (
    <>
      <foo.OauthSender
        authorizeUrl={"https://www.reddit.com/api/v1/authorize"}
        clientId={id}
        redirectUri={"http://y2bd.me/addict"}
        args={{ scope: "read" }}
        state={{ reddit: "reddit" }}
        render={renderSender}
      />
      <foo.OauthReceiver
        tokenUrl="https://www.reddit.com/api/v1/access_token"
        clientId={id}
        clientSecret={secret}
        redirectUri="http://y2bd.me/addict"
        onAuthSuccess={handleSuccess}
        onAuthError={handleError}
        tokenFetchArgs={{
          headers: {
            Authorization:
              "Basic " + btoa(unescape(encodeURIComponent(id + ":" + secret)))
          },
          method: "POST"
        }}
        render={renderReceiver}
      />
      {token && <App />}
    </>
  );
};

export default OAuthApp;
