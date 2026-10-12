import { test, expect } from '../fixtures';
import { InventoryPage } from '../pages/InventoryPage';

test('add to cart adds the item successfully', async ({ inventoryPage }) =>{
        await inventoryPage.backpackAddToCart.click();
        await expect(inventoryPage.shoppingCartItems).toContainText('1');
})

test('remove from cart removes the item successfully', async ({ inventoryPage }) =>{
        await inventoryPage.backpackAddToCart.click();
        await expect(inventoryPage.shoppingCartItems).toContainText('1');
        await inventoryPage.backpackRemove.click();
        await expect(inventoryPage.shoppingCartItems).toBeHidden();
})

test('sort by z to a and verify the order of items', async ({ inventoryPage }) =>{
        await inventoryPage.SortByNameAToZ();
        await expect(inventoryPage.backpackTitle).toContainText('Test.allTheThings() T-Shirt (Red)');
})

test('hamburger menu opens and contains all options', async ({ inventoryPage }) =>{
        await inventoryPage.hamburger.click();
        await expect(inventoryPage.hamburgerAllItems).toBeVisible();
        await expect(inventoryPage.hamburgerDynamicCatalog).toBeVisible();
        await expect(inventoryPage.hamburgerAbout).toBeVisible();
        await expect(inventoryPage.hamburgerLogout).toBeVisible();
        await expect(inventoryPage.hamburgerResetAppState).toBeVisible();
})

test('hamburger menu can be closed', async ({ inventoryPage }) =>{
        await inventoryPage.hamburger.click();
        await expect(inventoryPage.hamburgerAllItems).toBeVisible();
        await inventoryPage.hamburgerClose.click();
        await expect(inventoryPage.hamburgerAllItems).toBeHidden();
})
