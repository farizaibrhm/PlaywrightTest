// src/test/steps/login.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from '../world/custom-world';

Given('I am on the login page', async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('https://practicetestautomation.com/practice-test-login/');
});

When('I enter {string} as user name', async function (this: CustomWorld, username: string) {
  const value = username === 'validUser' ? 'student' : username;
  await this.page.fill('#username', value);
});

When('I enter {string} as password', async function (this: CustomWorld, password: string) {
  const value = password === 'validPassword' ? 'Password123' : password;
  await this.page.fill('#password', value);
});

When('I click on the {string} button', async function (this: CustomWorld, button: string) {
  if (button === 'Submit') {
    await this.page.click('#submit');
  }
});

Then('I should see {string} message', async function (this: CustomWorld, message: string) {
  if (message === 'Login Successful') {
    await this.page.waitForSelector('h1:has-text("Logged In Successfully")');
  } else if (message === 'Login Unsuccessful') {
    await this.page.waitForSelector('div:has-text("Your username is invalid!")');
  } else {
    throw new Error(`Unknown message: ${message}`);
  }

  await this.browser?.close();
});

