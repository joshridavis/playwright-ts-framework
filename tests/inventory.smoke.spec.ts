import { test, expect } from '../fixtures';

test('logged-in user reaches inventory without loggin in', async ({ inventoryPage }) =>{
    await expect(inventoryPage.title).toHaveText('Products');
})

test('sorting default appears as expected (A to Z)', async ({ inventoryPage }) =>{
    await expect(inventoryPage.sort).toContainText('Name (A to Z)');
})

test('Add to cart button available and correct', async ({ inventoryPage }) =>{
    await expect(inventoryPage.backpackAddToCart).toBeVisible();
    await expect(inventoryPage.backpackAddToCart).toContainText('Add to cart');
})

test('Backpack item title is correct', async ({ inventoryPage }) =>{
    await expect(inventoryPage.backpackTitle).toHaveText(inventoryPage.backpackTitleTxt);
})

test('Backpack item description is correct', async ({ inventoryPage }) =>{
    await expect(inventoryPage.backpackDescription).toHaveText(inventoryPage.backpackDescriptionTxt);
})

test('Backpack item price is correct', async ({ inventoryPage }) =>{
    await expect(inventoryPage.backpackPrice).toHaveText(inventoryPage.backpackPriceTxt);
})

