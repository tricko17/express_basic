const router = require('express').Router();

router.get("/api/users", (req,res) => {
    res.send({
        "message": "Get Users"
    });
});

router.post("/api/users", (req,res) => {
    res.send({
        "message": "Post Users",
        "result": req.body
    });
});

module.exports = router;