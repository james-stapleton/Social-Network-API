const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],

    createdAt: {
      type: Date,
      default: Date.now(),
      get: (timestamp) => new Date(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// thoughtSchema.virtual('reactionCount').get( () => {
//   if (this.reactions.length) {
//     return this.reactions.length
//   }
//   else {
//     return 0;
//   }
// } );

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;