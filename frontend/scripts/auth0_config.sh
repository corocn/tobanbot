#!/usr/bin/bash

cat <<EOL
module.exports = {
  domain: '${FRONT_AUTH0_DOMAIN}',
  clientID: '${FRONT_AUTH0_CLIENT_ID}',
  redirectUri: '/auth/callback',
  audience: '${FRONT_AUTH0_AUDIENCE}',
  responseType: 'token id_token',
  scope: 'openid profile email'
}
EOL
