require("dotenv").config()

//* process.env.id can be name or number of the receiver. Used for chat UI selection
//todo move to a ui step
const allRecipients = [
  /* {
    id: process.env.id,
    message: "🥋 Custom message 🥋",
    time: "11:47",
  }, */
  {
    id: process.env.four,
    message: "Hi dear...thinking about you thinking about me",
    time: "17:30",
  },
  {
    id: process.env.bdK,
    message: "Evening all...",
    time: "21:10",
  },
  {
    id: process.env.bdK,
    message: "Good morning everyone, wish you a great day ahead",
    time: "8:10",
  }
]

module.exports = allRecipients
