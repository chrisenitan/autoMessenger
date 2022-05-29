const { chromium } = require("@playwright/test")
const selectors = require("./selectors.json")

const sendMessage = async (recipient) => {
  const options = {
    headless: false,
    channel: "chrome",
  }
  const browser = await chromium.launchPersistentContext("indexUserData", options)

  const page = await browser.newPage()
  await page.goto("https://web.whatsapp.com/")

  await page.locator(`text=${recipient.id}`).click()
  await page.locator(selectors.textBox).click()
  await page.locator(selectors.textBox).press("CapsLock")
  await page.type(selectors.textBox, recipient.message, { delay: 100 })
  await page.locator(selectors.sendButton).click()
  await page.waitForTimeout(2000) //actual message sending
  console.log(`\x1b[32mMessage Sent \x1b[0m  \n`)
  await browser.close()
  return true
}

module.exports = sendMessage
