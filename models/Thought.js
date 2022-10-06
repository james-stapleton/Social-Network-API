const { Schema, model } = require("mongoose");
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

    reactions: [],

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

thoughtSchema.virtual('countReactions').get( () => this.reactions.length);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;