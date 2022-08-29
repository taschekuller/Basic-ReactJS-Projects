const express = require ('express');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId:'5a1c4e09f8944cedac770ccb5b6b5df1',
        clientSecret:'5bd7e7844abd4128a7895a0d5eecdd03'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})


