import { test as setup, expect } from '@playwright/test';
import path from 'node:path';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;
    if(!username || !password){
        throw new Error('SAUCE_USERNAME or SAUCE_PASSWORD is missing in env');
    }
    await page.goto('/');
    await page.getByTestId('username').fill(username);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('title')).toHaveText('Products');

    await page.context().storageState({ path: authFile });
});