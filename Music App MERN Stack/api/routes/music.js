const express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {

  res.send(
    [
        {
            title: "Yaşlı Amca",
            views:"100",
            description: "Üretimlerine hız kesmeden devam eden İhtiyar yeni üretimleri ile dinleyici karşısında.",
            imageURL: "https://api.wannart.com/storage/content/yasli-amcanin-yeni-sarkisi-klibiyle-birlikte-dijital-platfor-4is09.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/badafoz-profile-bkgaO.jpg",
            genre:"Music",
            writer:"@taschekuller",
            id: 1
          },
          {
            title: "Inanch",
            views:"121",
            description: "Farklı zamanlarda çıkardığı sololarla tanınan Inanch yeni bir şarkıyı bugün paylaştı.",
            imageURL: "https://cdn.wannart.com/production/post/inanch-ve-guliz-dogani-bir-araya-getiren-yeni-sarki-cikti-8olHU.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/listenary.jpg",
            genre:"Music",
            writer:"@greghouse",
            id: 2
          },
          {
            title: "Never Meant",
            views:"93",
            description: "Kimileri için  hiç yaşanmamış anıları yaşatan bir albümdür American Football.",
            imageURL: "https://cdn.wannart.com/production/post/her-son-gibi-huzunlu-ama-mutlu-american-football-album-incel-nnVgZ.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/badafoz-profile-bkgaO.jpg",
            genre:"Music",
            writer:"@taschekuller",
            id: 3
          },
          {
            title: "Lil Nas X",
            views:"85",
            description: "Son zamanların hit rapçisi Lil Nas X, ilk stüdyo albümü MONTERO'yu yayımladı. ",
            imageURL: "https://cdn.wannart.com/production/post/lil-nas-x-uzun-suredir-beklenen-ilk-studyo-albumunu-yayimlad-qBuPU.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/badafoz-profile-bkgaO.jpg",
            genre:"Music",
            writer:"@greghouse",
            id: 4
          },
          {
            title: "Antimatter",
            views:"44",
            description: "Anathema'dan ayrılan Duncan Patterson tarafından 1997 yılında kurulmuş gruptur.",
            imageURL: "https://cdn.wannart.com/production/post/en-iyi-trip-hop-gruplarimuzisyenleri-f0JX9.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/badafoz-profile-bkgaO.jpg",
            genre:"Music",
            writer:"@taschekuller",
            id: 5
          },
          {
            title: "Baby Keem",
            views:"151",
            description: "Son yılın yükselen trap yıldızı Baby Keem, ilk stüdyo albümü The Melodic Blues'u yayımladı. ",
            imageURL: "https://cdn.wannart.com/production/post/son-yilin-yukselen-trap-yildizi-baby-keem-ilk-studyo-albumun-8p3ry.jpg",
            profilePicURL:"https://cdn.wannart.com/production/user/profile/badafoz-profile-bkgaO.jpg",
            genre:"Music",
            writer:"@greghouse",
            id: 6
          }
    ]
  )
})

module.exports=router;
