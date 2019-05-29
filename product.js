const express = require('express');

const router = express.Router();

router.post('/product', (request, response) => {
   console.log('post method');
});
module.exports=router;i