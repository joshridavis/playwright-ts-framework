import {type Page, type Locator} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly title: Locator;
    readonly checkout: Locator;
    readonly continueShopping: Locator;
    readonly qtyTitle: Locator;
    readonly descriptionTitle: Locator;
    readonly firstItemQty: Locator;
    readonly firstItemTitle: Locator;
    readonly firstItemDescription: Locator;
    readonly firstItemPrice: Locator;
    readonly firstRemoveBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.getByTestId('title');
        this.checkout = page.getByTestId('checkout');
        this.continueShopping = page.getByTestId('continue-shopping');
        this.qtyTitle = page.getByTestId('cart-quantity-label');
        this.descriptionTitle = page.getByTestId('cart-desc-label');
        this.firstItemQty = page.getByTestId('item-quantity').first();
        this.firstItemTitle = page.getByTestId('inventory-item-name').first();
        this.firstItemDescription = page.getByTestId('inventory-item-desc').first();
        this.firstItemPrice = page.getByTestId('inventory-item-price').first();
        this.firstRemoveBtn = page.getByTestId('remove-sauce-labs-backpack').first();
    }

    async goto(){
        await this.page.goto('/Cart.html');
    }
}