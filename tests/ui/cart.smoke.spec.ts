import { test, expect } from '../../fixtures';
import {expectVisibleAndText} from '../../utils/assertions'

test('logged-in user reaches cart without loggin in', async ({ cartPage }) =>{
    await expect(cartPage.title).toHaveText('Your Cart');
})

test('Checkout button is visible and correct', async ({ cartPage }) =>{
    await expectVisibleAndText(cartPage.checkout, 'Checkout');
})

test('Continue Shopping button is visible and correct', async ({ cartPage }) =>{
    await expectVisibleAndText(cartPage.continueShopping, 'Continue Shopping');
})

test('QTY title is visible and correct', async ({ cartPage }) =>{
    await expectVisibleAndText(cartPage.qtyTitle, 'QTY');
})

test('Description title is visible and correct', async ({ cartPage }) =>{
    await expectVisibleAndText(cartPage.descriptionTitle, 'Description');
})