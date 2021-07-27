import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

afterAll(async () => {
    await (await driver).quit()
})

test('I can search Google', async () => {

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('LOTR\n')
    await (await driver).sleep(2000)

    searchBar = await (await driver).findElement(By.name('q'))
    await (await (await driver).findElement(By.name('q'))).clear()
    await searchBar.sendKeys('Kittens\n')

    
})