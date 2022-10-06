const router = require('express').Router();
const {User, Thought} = require('../../models');

router.get('/', (req,res) => {
    User.find()
        .then((userData) => {
            res.json(userData);
        })
})


module.exports = router;