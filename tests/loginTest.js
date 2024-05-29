const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function loginTest() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.navigate().to("https://www.facebook.com/");

    await driver.findElement(By.id("email")).sendKeys("");
    await driver.findElement(By.id("pass")).sendKeys("");
    await driver.findElement(By.name("login")).click();

    const pageTitle = await driver.getTitle();
    // assert usign node assertion
    assert.strictEqual(pageTitle, "Facebook");

    await driver.wait(until.titleIs("Facebook"), 10000);
  } finally {
    await driver.quit();
  }
}
loginTest();
