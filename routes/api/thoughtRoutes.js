const router = require('express').Router();
const {User, Thought} = require('../../models');

router.get('/', (req,res) => {
    Thought.find()
        .then((thoughtData) => {
            res.json(thoughtData);
        })
});

router.post('/', (req,res) => {
    Thought.create(req.body)
    .then ((thoughtData) => res.status(200).json(thoughtData))
    .catch((err) => res.status(500).json(err))
});

module.exports = router;
