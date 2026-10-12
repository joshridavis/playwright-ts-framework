import {type Page, type Locator} from '@playwright/test';

export class InventoryPage{
    readonly page: Page;
    readonly title: Locator;
    readonly sort: Locator;
    readonly backpackAddToCart: Locator;
    readonly backpackTitle: Locator;
    readonly backpackDescription: Locator;
    readonly backpackPrice: Locator;
    readonly backpackRemove: Locator;
    readonly shoppingCartItems: Locator;
    readonly hamburger: Locator;
    readonly hamburgerAllItems: Locator;
    readonly hamburgerDynamicCatalog: Locator;
    readonly hamburgerAbout: Locator;
    readonly hamburgerLogout: Locator;
    readonly hamburgerResetAppState: Locator;
    readonly hamburgerClose: Locator;


    constructor(page: Page){
        this.page = page;
        this.title = page.getByTestId('title');
        this.sort = page.getByTestId('product-sort-container');
        this.backpackAddToCart = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.backpackTitle = page.getByTestId('inventory-item-name').first();
        this.backpackDescription = page.getByTestId('inventory-item-desc').first();
        this.backpackPrice = page.getByTestId('inventory-item-price').first();
        this.backpackRemove = page.getByTestId('remove-sauce-labs-backpack');
        this.shoppingCartItems = page.getByTestId('shopping-cart-badge');
        this.hamburger = page.locator('#react-burger-menu-btn');
        this.hamburgerAllItems = page.getByTestId('inventory-sidebar-link');
        this.hamburgerDynamicCatalog = page.getByTestId('dynamic-catalog-sidebar-link');
        this.hamburgerAbout = page.getByTestId('about-sidebar-link');
        this.hamburgerLogout = page.getByTestId('logout-sidebar-link');
        this.hamburgerResetAppState = page.getByTestId('reset-sidebar-link');
        this.hamburgerClose = page.locator('#react-burger-cross-btn');
    }

    async goto(){
        await this.page.goto('/Inventory.html');
    }

    async SortByNameAToZ(){
        await this.sort.click();
        await this.sort.selectOption('Name (Z to A)');
    }

}