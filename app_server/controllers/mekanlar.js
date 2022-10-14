var express = require('express');
var router = express.Router();
/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('anaSayfa', { 'title': 'Ana sayfa' });
  }
  const mekanBilgisi = function(req, res, next) {
    res.render('mekanBilgisi', { 'title': 'Mekan bilgisi' });
  }
  const yorumEkle = function(req, res, next) {
    res.render('yorumEkle', { 'title': 'Yorum ekle' });
  }
  

  module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle

  }

