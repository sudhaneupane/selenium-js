const { Browser, By, Key, Builder, until } = require("selenium-webdriver");
const { describe, it } = require("mocha");

describe("timeouts", function () {
  let driver;
  it("explicit wait", async function () {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("");
    await driver.findElement(By.id("")).send
  });
});