const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("App is able to start a duel.", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.sleep(1000);

    await driver.findElement(By.id('draw')).click()

    await driver.sleep(3000);

  });

  test("App is able to select 2 fighters.", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.sleep(1000);

    await driver.findElement(By.id('draw')).click();

    await driver.sleep(3000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(1000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(3000);
  });


  test("App is able to start a duel.", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.sleep(1000);

    await driver.findElement(By.id('draw')).click();

    await driver.sleep(3000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(1000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(1000);

    await driver.findElement(By.id('duel')).click();

    await driver.sleep(5000);
  });

  
  test.only("App is able to return after a duel.", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.sleep(1000);

    await driver.findElement(By.id('draw')).click();

    await driver.sleep(3000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(1000);

    await driver.findElement(By.className('bot-btn')).click();

    await driver.sleep(1000);

    await driver.findElement(By.id('duel')).click();
    
    await driver.sleep(5000);

    await driver.findElement(By.id('play-again')).click();

    await driver.sleep(3000);
  });


});

