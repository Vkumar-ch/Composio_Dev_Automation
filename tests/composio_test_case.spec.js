import {test, expect} from '@playwright/test'
const { chromium } = require('@playwright/test');

test('composio dev',(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://composio.dev/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Continue with Github' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('vinodhkumarch554@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Kumar@768');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  const element = await page.getByRole('button', { name: 'Authorize composio-dev' });
  const element1 = await page.getByRole('link', { name: 'Github A platform for version' });
    if(element){
//    await element.waitFor({ state: 'visible' });
    await element.click();
    }else{
//    await element1.waitFor({ state: 'visible' });
    await element1.click();
    }

  await page.getByRole('link', { name: 'Github A platform for version' }).click();
  await page.locator('div:nth-child(5) > div:nth-child(5) > .inline-flex').click();
  await page.getByText('Playground').click();
  await page.getByRole('button', { name: 'Run action' }).click();
  await page.getByText('{execution_details: {executed').click();
  await page.close();

  await context.close();
  await browser.close();
}));