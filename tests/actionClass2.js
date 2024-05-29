const { Browser, Builder, Key, until, By } = require("selenium-webdriver");
(async function dragAndDrop() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get(
      "https://www.selenium.dev/selenium/web/mouse_interaction.html"
    );
    const srcElem = await driver.findElement(By.id("draggable"));
    const targetEle = await driver.findElement(By.id("droppable"));
    // await driver
    //   .actions({ async: true })
    //   .dragAndDrop(srcElem, targetEle)
    //   .perform();
    //   await driver.sleep(3000)

    const S = await driver.findElement(By.id("click"));
    // RightClick
    // await driver.actions({ async: true }).contextClick(S).perform();

    // await driver.actions({async:true}).doubleClick(S).perform()

    // await driver.actions({async:true}).click(S).perform()

    await driver.findElement(By.id("clickable")).sendKeys("Hello World");
    // await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform()
    await driver.actions().KeyDown(Key.BACK_SPACE).perform()
    await driver.sleep(3000);
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
})();

