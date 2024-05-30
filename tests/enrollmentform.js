const{Browser,Builder,By,Key}=require('selenium-webdriver')
async function enrollForm(){
    const driver=await new Builder().forBrowser(Browser.FIREFOX).build()
    try {
        await driver.get("https://formtesting-qvhi.vercel.app/")
        await driver.findElement(By.id("name")).sendKeys("Sudha Neupane")
        await driver.findElement(By.id("email")).sendKeys("sudha.1@gmail.com")
        await driver.findElement(By.className('selected-flag')).click()
        await driver.sleep(3000)
    } catch (error) {
        console.log(error);
    }
    finally{
        await driver.quit()
    }
}
enrollForm()