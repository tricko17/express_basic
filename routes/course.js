const router = require('express').Router();

router.get("/api/course", (req,res) => {
    res.send({
        "message": "Get Course"
    });
});

router.post("/api/course", (req,res) => {
    res.send({
        "message": "Post Course",
        "result": req.body
    });
});

module.exports = router;