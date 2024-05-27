const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.navigate().to('https://www.google.com/ncr')
    await driver.manage().window().maximize()
    await driver.manage().window().minimize()
    await driver.manage().window().fullscreen()
    await driver.manage().window().setSize(250,500)
    const windowSize=await driver.manage().window().getSize()
    // console.log(`height ${windowSize.height} width ${windowSize.width}`);  

    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  } finally {
    await driver.quit()
  }
})()