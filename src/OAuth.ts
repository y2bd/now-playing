import { id, secret } from "./secret";

// tslint:disable:no-var-requires
// tslint:disable:object-literal-sort-keys
const foo = require("react-oauth-flow");

export const { Sender, Receiver } = foo.createOauthFlow({
  authorizeUrl: "https://www.reddit.com/api/v1/authorize",
  tokenUrl: "https://www.reddit.com/api/v1/access_token",
  clientId: id,
  clientSecret: secret,
  redirectUri: "http://y2bd.me/addict"
});
