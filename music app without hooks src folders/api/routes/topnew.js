const express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {

  res.send(
    [
        {
            name: "Joyner Lucas & J. Cole",
            writer:"@taschekuller",
            description: "'Your Heart' dinleyicileri ile buluştu.",
            imageURL: "https://cdn.wannart.com/production/post/joyner-lucas-ve-j-cole-surpriz-bir-tekli-yayimladi-yxA0f.jpg",
            id: 1
          },
          {
            name: "G-Eazy",
            writer:"@greghouse",
            description: "Albümün şarkı listesi şu şekilde:",
            imageURL: "https://cdn.wannart.com/production/post/g-eazy-buyuk-isimlerin-konuk-sanatci-olarak-bulundugu-yeni-a-bDyyl.jpg",
            id: 2
          },
          {
            name: "Imany",
            writer:"@taschekuller",
            description: "2010'lu yıllara inanılmaz bir iz bırakan sanatçı, canlı performanslarıyla da başarısını sergilemeye devam ediyor",
            imageURL: "https://cdn.wannart.com/production/post/fransiz-muziginin-onemli-isimlerinden-imany-bu-kis-turkiyeye-vUEVK.jpg",
            id: 3
          },
          {
            name: "Baneva",
            writer:"@greghouse",
            description: "Baneva, altyapısında SKAII'nin olduğu yeni teklisi 'IKONIK'i yayımladı.",
            imageURL: "https://cdn.wannart.com/production/post/baneva-altyapisinda-skaiinin-oldugu-yeni-teklisini-yayimladi-PyYSt.jpg",
            id: 4
          },
          {
            name: "Ezhel",
            writer:"@taschekuller",
            description: "Ezhel geceye özel yaptığı şarkısı 'Mayrig' (Anne) ile Uluslararası Hrant Dink Ödül töreninde olacak.",
            imageURL: "https://cdn.wannart.com/production/post/ezhelin-uluslararasi-hrant-dink-odulu-toreninde-soyleyecegi--yOFm7.jpg",
            id: 5
          },

    ]
  )
})

module.exports=router;
