require("dotenv").config()

//* process.env.id can be name or number of the receiver. Used for chat UI selection
//todo move to a ui step
const allRecipients = [
  {
    id: process.env.id,
    message: "Custom message",
    time: "10:37",
  },
  {
    id: process.env.id,
    message: "This is a test two",
    time: "10:01",
  },
]

module.exports = allRecipients
