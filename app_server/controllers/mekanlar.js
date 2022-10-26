var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res) {
  res.render("anasayfa", {
    "baslik": "Ana Sayfa",
    "sayfaBaslik": {
      "siteAd": "MekanBul",
      "slogan": "Civardaki Mekanları Keşfet!",
    },
    "mekanlar": [
      {
        "ad": "Starbucks",
        "adres": "Bebek/Beşiktaş/İstanbul",
        "puan": "4",
        "imkanlar": ["Dünya Kahveleri", "Yiyecek", "Hızlı Wifi Bağlantısı"],
        "mesafe": "571km ",
      },
      {
        "ad": "Nakkaştepe",
        "adres": "Üsküdar/İstanbul",
        "puan": "3",
        "imkanlar": ["Temiz Hava,","Doğal Güzellik"],
        "mesafe": "570km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res) {
  res.render("mekanbilgisi", 
  { 
    "baslik": "Mekan Bilgisi",
    "mekanBaslik": "Starbucks",
    "mekanDetay": {
        "ad": "Starbucks",
        "adres": "Bebek/Beşiktaş/İstanbul",
        "puan": "4",
        "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
        "koordinatlar": {
            "enlem": "37.7",
            "boylam": "30.5"
        },
        "saatler": [
            {
                "gunler": "Pazartesi-Cuma",
                "acilis": "6:30-01:00",
                "kapali": "false"
            },
            {
                "gunler": "Cumartesi-Pazar",
                "acilis": "6:30-01:00",
                "kapali": "false"
            }
        ],
        "yorumlar": [
            {
                "yorumYapan": "Barış Enginbağ",
                "puan": "4",
                "tarih": "20 Ekim 2022",
                "yorumMetni": "Kahveler iyi."
            }
        ]
    }

 });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};