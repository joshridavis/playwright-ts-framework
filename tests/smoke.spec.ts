import { test, expect } from '../fixtures';
import { InventoryPage } from '../pages/InventoryPage';

test('logged-in user reaches inventory without loggin in', async ({ inventoryPage }) =>{
    await expect(inventoryPage.title).toHaveText('Products');
})