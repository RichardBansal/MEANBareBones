//TEMPL: Bring over this file to template as well
var router = require('express').Router();

router.get("/*",function(req,res,next){
	res.send('index.html');
});

module.exports = router;