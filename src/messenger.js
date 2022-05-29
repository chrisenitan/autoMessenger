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
    await page.type(selectors.textBox, recipient.message)
    await page.locator(selectors.sendButton).nth(4).click()
    await page.waitForTimeout(2000) //actual message sending
    console.log("Message Sent")
    await browser.close()
    return true
}
  
module.exports = sendMessage