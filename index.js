const sendMessage = require("./src/messenger.js")
const allRecipients = require("./src/data/recipients")
const { log } = require("./src/utils")

const queue = async (allRecipients) => {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes() - 1

  for (const currentRecipients of allRecipients) {
    const userTime = currentRecipients.time.split(":")
    log(
      `${hour}:${minute}: Message to be sent to ${currentRecipients.id} at ${userTime[0]}:${userTime[1]}`
    )
    //sends one min earlier to cover 1min interval time loss
    if (hour == userTime[0] && minute == userTime[1] - 1) {
      log(`\x1b[34mSending Message \x1b[0m  \n`)
      await sendMessage(currentRecipients)
    } else {
      log(`\x1b[32mPending Messages \x1b[0m  \n`)
    }
  }
}

;(async () => {
  setInterval(
    async () => (
      log(`\x1b[34m------------[auto messenger]----------- \x1b[0m  \n`), await queue(allRecipients)
    ),
    60000
  )
})()
