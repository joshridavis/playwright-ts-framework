import {type Page, type Locator} from '@playwright/test';

export class InventoryPage{
    readonly page: Page;
    readonly title: Locator;
    readonly sort: Locator;
    readonly backpackAddToCart: Locator;
    readonly backpackTitle: Locator;
    readonly backpackDescription: Locator;
    readonly backpackPrice: Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.getByTestId('title');
        this.sort = page.getByTestId('product-sort-container');
        this.backpackAddToCart = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.backpackTitle = page.getByTestId('inventory-item-name').first();
        this.backpackDescription = page.getByTestId('inventory-item-desc').first();
        this.backpackPrice = page.getByTestId('inventory-item-price').first();
    }

    async goto(){
        await this.page.goto('/Inventory.html');
    }
}