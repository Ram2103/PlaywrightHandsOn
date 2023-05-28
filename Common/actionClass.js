const { expect } = require('@playwright/test');
const {ActionClass} = require('../Common/actionClass')

exports.ActionClass = class ActionClass {

   constructor(page,context){
    this.page = page;
    this.context = context;
   }
    
   async openURL(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState();
   }

   async clickElement(element) {
    await element.click();
   }
   
   async sendtext(element, text){
    await element.fill(text);
   }
   
   async getText(element){
       return await element.textContent();
   }
   
   async newTab(site){
       console.log(site)
       let wen ='https://playwright.dev/'
       const newPage = await Promise.all([
           await this.page.evaluate(async () => await window.open(wen))
       ])
       await this.page.waitForTimeout(3000);
   }
}