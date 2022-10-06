const thoughts = [
  {
    thoughtText: "This is the first thought. Programming is fun!",
    username: "James",
    reactions: [
      {
        reactionBody: "Nerd",
        username: "Joe",
      },
    ],
  },
  {
    thoughtText: "How do I use this app?",
    username: "Kyle",
    reactions: [
      {
        reactionBody: "You shouldn't",
        username: "James",
      },
    ],
  },
  {
    thoughtText: "Test thought 3",
    username: "test",
    reactions: [
      {
        reactionBody: "Nice thought",
        username: "tester",
      },
      {
        reactionBody: "Did it work?",
        username: "testiest",
      },
    ],
  },
];

const users = [
  {
    username: "James",
    email: "james@test.com",
    thoughts: [...thoughts],
  },
];

