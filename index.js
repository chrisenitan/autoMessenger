const sendMessage = require("./src/messenger.js")
const allRecipients = require("./src/data/recipients")

const queue = async (allRecipients) => {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes() - 1

  for (const currentRecipients of allRecipients) {
    const userTime = currentRecipients.time.split(":")
    console.log(
      `Currently ${hour}:${minute}. Message will be sent at ${userTime[0]}:${userTime[1]}`
    )
    //sends one min earlier to cover 1min interval time loss
    if (hour == userTime[0] && minute == userTime[1] - 1) {
      console.log("Sending message")
      await sendMessage(currentRecipients)
    } else {
      console.log("Not yet time to send")
    }
  }
}

;(async () => {
  setInterval(async () => await queue(allRecipients), 60000)
})()
