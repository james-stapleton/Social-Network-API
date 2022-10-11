const router = require('express').Router();
const {User, Thought} = require('../../models');

router.get('/', (req,res) => {
    User.find()
    .select('-__v')
        .then((userData) => {
            res.json(userData);
        })
})

router.get('/:id', (req,res) => {
    User.findOne({ _id: req.params.id } )
    .select('-__v')
    .then ((user) => res.json(user));
});

router.post('/', (req,res) => {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err))
})

module.exports = router;