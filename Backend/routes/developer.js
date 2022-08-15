const express = require("express");
const router = express.Router();


router.post("/updateProjectStatus", (req, res, next)=>{
    console.log("2222222222222222222222222222222222222");
    console.log(req.body);
    
})


module.exports = router;