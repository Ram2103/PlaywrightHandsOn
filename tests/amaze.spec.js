const { test, expect } = require('@playwright/test');
const {ActionClass} = require('../Common/actionClass')
const {LoginPage} = require('../Common/LoginPage')
let action;
let page;
let loginPage;

test.beforeEach(async({browser,context}) =>{
    page = await browser.newPage();
    loginPage = new LoginPage(page,context);
})

test.describe('Amazon flow test', ()=>{
    test('Login test', async ()=>{
        await loginPage.login('')
    })
    
    test('Test accessibility @access', async () =>{
        await loginPage.openPage('https://playwright.dev/')
    })
})

test.afterEach(async({browser}) =>{
    await page.close();
})