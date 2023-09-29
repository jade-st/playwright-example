const base = require('@playwright/test');
const {HomePage}= require('../pages/home.page')
const {ErrorPage}= require('../pages/error.page')

exports.test = base.test.extend({
    // Import pages to be used across spec files
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
},
    errorPage: async ({ page }, use) => {
        await use(new ErrorPage(page) )}
    });      