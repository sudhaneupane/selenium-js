const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.navigate().to('https://www.amazon.com/')
    // await driver.executeScript()

    await driver.sleep(4000)
  } finally {
    await driver.quit()
  }
})()