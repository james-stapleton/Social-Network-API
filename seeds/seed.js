const connection = require('../config/connection');
const {Thought, User} = require('../models');

const thoughts = [
  {
    thoughtText: "This is the first thought. Programming is fun!",
    username: "James",
    reactions: [
      {
        reactionBody: "reaction 1",
        username: "Joe",
      },
    ],
  },
  {
    thoughtText: "How do I use this app?",
    username: "James",
    reactions: [
      {
        reactionBody: "You shouldn't",
        username: "Joe",
      },
    ],
  },
  {
    thoughtText: "Test thought 3",
    username: "James",
    reactions: [
      {
        reactionBody: "new reaction",
        username: "Joe",
      }
    ],
  },
];

const users = [
  {
    username: "James",
    email: "james@test.com",
    thoughts: thoughts,
  },
  {
      username: "Joe",
      email: "joe@test.com",
      thoughts: [
        {
      thoughtText: "Test thought",
      username: "Joe",
      reactions: [
        {reactionBody: "Reaction",
        username: "James"}
    ]
      }],
    }
];

connection.once('open', async () => {
  console.log('connected');

  // Delte existing users, if any
  await User.deleteMany({});

  //Delete existing thoughts, if any
  await Thought.deleteMany({});
  
  // Seed thoughts 
  await Thought.collection.insertMany(thoughts);

    // Seed users
    const userData = await User.collection.insertMany(users);

    if (!userData) {
      console.error("User data failed", userData);
    }
  
    console.log("Users: ==============>", userData);
  

  console.table(users[0].thoughts);
})

