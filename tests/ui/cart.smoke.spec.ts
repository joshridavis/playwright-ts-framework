import { test, expect } from '../../fixtures';

test('logged-in user reaches cart without loggin in', async ({ cartPage }) =>{
    await expect(cartPage.title).toHaveText('Your Cart');
})

test('Checkout button is visible and correct', async ({ cartPage }) =>{
    await expect(cartPage.checkout).toBeVisible();
    await expect(cartPage.checkout).toHaveText('Checkout');
})

test('Continue Shopping button is visible and correct', async ({ cartPage }) =>{
    await expect(cartPage.continueShopping).toBeVisible();
    await expect(cartPage.continueShopping).toHaveText('Continue Shopping');
})

test('QTY title is visible and correct', async ({ cartPage }) =>{
    await expect(cartPage.qtyTitle).toBeVisible();
    await expect(cartPage.qtyTitle).toHaveText('QTY');
})

test('Description title is visible and correct', async ({ cartPage }) =>{
    await expect(cartPage.descriptionTitle).toBeVisible();
    await expect(cartPage.descriptionTitle).toHaveText('Description');
})

// Next - five cart sanity tests