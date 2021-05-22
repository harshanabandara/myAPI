let router = require('express').Router();

router.get('/',function(req,res){
    res.json({  status: 'API is working ',
                message: 'Welcome'
    });
    console.log("accesseed '/api/");
});
router.get('/first/',function(req,res){
    res.json({
        status:"next level",
        message: "it works!"
    })
    console.log("accesseed '/api/first/");
})
module.exports = router;