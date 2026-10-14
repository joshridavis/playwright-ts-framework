import { test, expect } from '../fixtures';

test('checkout button leads to the checkout screen', async ({ cartPage }) =>{
    await cartPage.checkout.click();
    await expect(cartPage.page.getByTestId('title')).toHaveText('Checkout: Your Information');
})

test('continue shopping button leads to the inventory screen', async ({ cartPage }) =>{
    await cartPage.continueShopping.click();
    await expect(cartPage.page.getByTestId('title')).toHaveText('Products');
})

test('backpack item in cart appears correcty', async ({ inventoryPage, cartPage }) =>{
    await cartPage.continueShopping.click();
    await inventoryPage.backpackAddToCart.click();
    await inventoryPage.shoppingCartItems.click();
    await expect(cartPage.firstItemQty).toHaveText('1');
    expect(cartPage.firstItemTitle).toHaveText(inventoryPage.backpackTitleTxt);
    expect(cartPage.firstItemDescription).toHaveText(inventoryPage.backpackDescriptionTxt);
    expect(cartPage.firstItemPrice).toHaveText(inventoryPage.backpackPriceTxt);
})

test('items can be removed from the cart', async ({ inventoryPage, cartPage }) =>{
    await cartPage.continueShopping.click();
    await inventoryPage.backpackAddToCart.click();
    await inventoryPage.shoppingCartItems.click();
    await expect(cartPage.firstItemQty).toHaveText('1');
    await cartPage.firstRemoveBtn.click();
    await expect(cartPage.firstItemQty).toBeHidden();
})

test('go to checkout and back with an item in cart does not remove it', async ({ inventoryPage, cartPage }) =>{
    await cartPage.continueShopping.click();
    await inventoryPage.backpackAddToCart.click();
    await inventoryPage.shoppingCartItems.click();
    await expect(cartPage.firstItemQty).toHaveText('1');
    await cartPage.checkout.click();
    await cartPage.goto();
    await expect(cartPage.firstItemQty).toHaveText('1');
})