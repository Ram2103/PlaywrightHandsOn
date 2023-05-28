const { expect } = require('@playwright/test');
const { ActionClass } = require('../Common/actionClass');

exports.LoginPage = class LoginPage{

    constructor(page,context){
        this.page = page;
        this.context = context;
        this.action = new ActionClass(page, context);
        this.signInLink = page.locator('#nav-link-accountList');
        this.username = page.locator('#ap_email');
        this.contin = page.locator('#createAccountSubmit');
    }

    async login(name) {
        await this.action.openURL('https://www.amazon.in/');
        await this.action.clickElement(this.signInLink);
        await this.action.sendtext(this.username, name);
        await this.page.waitForTimeout(2000);
        let val = await this.action.getText(this.contin);
        console.log('value----'+val.trim());
    }
    
    async openPage(site){
        await this.action.openURL(site);
        await this.page.waitForTimeout(3000)
        expect(await this.page.screenshot()).toMatchSnapshot({threshold:0.5, maxDiffPixels: 5000 });
    }
    async newSite(url) {
        await this.action.newTab(url.toString())
    }
}