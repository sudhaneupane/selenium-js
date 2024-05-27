const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.navigate().to('https://www.google.com/ncr')
    await driver.navigate().back()  // for navigating back
    // await driver.navigate().forward() 
    await driver.navigate().refresh()
    // await driver.navigate().get()
    await driver.sleep(2000)
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('webdriver - Google Search'), 5000)
  } finally {
    await driver.quit()
  }
})();