import {type Page, type Locator} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly title: Locator;
    readonly checkout: Locator;
    readonly continueShopping: Locator;
    readonly qtyTitle: Locator;
    readonly descriptionTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.getByTestId('title');
        this.checkout = page.getByTestId('checkout');
        this.continueShopping = page.getByTestId('continue-shopping');
        this.qtyTitle = page.getByTestId('cart-quantity-label');
        this.descriptionTitle = page.getByTestId('cart-desc-label');
    }

    async goto(){
        await this.page.goto('/Cart.html');
    }
}