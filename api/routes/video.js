var express = require('express');
var router = express.Router();
var vid_links = require('../public/javascripts/vid_links');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(vid_links.FINAL_VID_LIST);
});

router.get('/:id', function(req, res, next) {
    res.send(vid_links.FINAL_VID_LIST[req.params.id]);
  });

module.exports = router;
