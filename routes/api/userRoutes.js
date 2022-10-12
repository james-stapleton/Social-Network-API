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
});

router.put('/:id', (req,res) => {
    const filter = { _id: req.params.id};
    const update = req.body;
    User.findOneAndUpdate(filter, update)
    .then((userData) => res.status(200).json(userData))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req,res) => {
    const filter = {_id: req.params.id};
    User.findOneAndDelete(filter)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

router.post('/:userId/friends/:friendId', (req,res) => {
    User.findOne( {where: {_id: req.params.userId}})
    .then((data) => {
        // console.log(data.friends)
        data.friends.unshift({_id: req.params.friendId});
        data.save();
        res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;