const express = require('express');
const router = express.Router();
const {signup , signin, requireSignin} = require('../../controller/seller/auth');

router.post('/seller/signup', signup);
router.post('/seller/signin', signin);


module.exports= router;