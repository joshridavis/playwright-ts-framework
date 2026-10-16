import {expect, Locator} from '@playwright/test';

export async function expectVisibleAndText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(expectedText);
}