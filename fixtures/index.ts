import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures = {
    inventoryPage: InventoryPage;
    cartPage: CartPage;
}

export const test = base.extend<MyFixtures>({
    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.goto();
        await use(inventoryPage);
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page);
        await cartPage.goto();
        await use(cartPage);
    },
})

export { expect } from '@playwright/test';