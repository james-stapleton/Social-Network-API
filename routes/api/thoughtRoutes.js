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

router.put('/:id', (req,res) => {
    const filter = { _id: req.params.id};
    const update = req.body;
    Thought.findOneAndUpdate(filter, update)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req,res) => {
    const filter = {_id: req.params.id};
    Thought.findOneAndDelete(filter)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

// add reaction
router.post('/:id', (req,res) => {
    Thought.findOne( {where: {_id: req.params.id}})
    .then((data) => {
        console.log(data)
        data.reactions.unshift(req.body);
        data.save();
        res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req,res) => {
    Thought.findOne( {where: {_id: req.params.id}})
    .then((data) => {
        console.log(data)
        data.reactions.id(req.body._id).remove();
        data.save();
        res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
