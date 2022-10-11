const router = require('express').Router();
const {User, Thought} = require('../../models');

router.get('/', (req,res) => {
    Thought.find()
        .then((thoughtData) => {
            res.json(thoughtData);
        })
})

module.exports = router;
