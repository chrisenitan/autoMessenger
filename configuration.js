
const { chromium } = require("@playwright/test")

/**
 * Configure the app by logging in to whatsapp web the first time
 */
const setUp = async () => {
  const options = {
    headless: false,
    channel: "chrome",
  }
  const browser = await chromium.launchPersistentContext("indexUserData", options)

  const page = await browser.newPage()
  await page.goto("https://web.whatsapp.com/")
  console.log("Please Login to Whatsapp")
  await page.waitForTimeout(60000)
}

;(async () => {
  await setUp()
})()
