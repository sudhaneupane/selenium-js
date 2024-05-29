const { Browser, Builder, Key, until, By } = require("selenium-webdriver");
const { describe, it, afterEach } = require("mocha");

describe("timeouts", function () {
  this.timeout(0);
  let driver;

  it("implicit wait", async function () {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://www.amazon.com/");
    await driver.manage().setTimeouts({implicit:10000})
    await driver.findElement(By.id("twotabsearchtextbox"))
    await driver.findElement(By.id("nothing"))  //fails 
  });

  afterEach(async function () {
      await driver.quit();
    
  });
});
