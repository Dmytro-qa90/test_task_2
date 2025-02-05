const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');


Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User clicks the {string} button', async (buttonText) => {
    await loginPage.clickLoginButton();
});

Then('User should see {string} error message', async (expectedError) => {
    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toHaveText(expectedError);
});

