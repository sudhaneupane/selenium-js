const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://www.amazon.com/");

    const element = await driver.findElement(By.id("glow-ingress-line1"));

    await driver.actions().move({ origin: element }).pause(3000).click().perform();

    await driver.wait(until.titleContains("Amazon"), 1000);
  } finally {
    await driver.quit();
  }
})();
