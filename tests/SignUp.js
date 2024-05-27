const { Builder, Key, Browser, By, until } = require("selenium-webdriver");
const { titleContains } = require("selenium-webdriver/lib/until");
(async function signUp() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.navigate().to("https://courses.ultimateqa.com/users/sign_up");
    await driver.findElement(By.id("user[first_name]")).sendKeys("sudha");
    await driver.findElement(By.id("user[last_name]")).sendKeys("secret_sauce");
    await driver.findElement(By.id('user[email]')).sendKeys('sudha@gmail.com')
    await driver.findElement(By.id('user[password]')).sendKeys('sudhA123')
    await driver.findElement(By.id('user[terms]')).click()
    await driver.findElement(By.className("button button-primary g-recaptcha")).click();

    await driver.wait(until.titleContains("Automation Practice - Ultimate QA"),1000);
  } catch (error) {
    console.log("Sign Up failed", error);
  } finally {
    await driver.quit();
  }
})();
