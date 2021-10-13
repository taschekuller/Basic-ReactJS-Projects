const express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send([
    {
      id: "1",
      name: "Gallerio",
      imageURL:
        "https://wannart.com/_nuxt/img/gallerio-desktop-banner.60f3b84.jpg",
    },
  ]);
});

module.exports = router;
