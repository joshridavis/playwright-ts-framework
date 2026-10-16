import { expect, APIRequestContext } from "@playwright/test";

export async function fetchAndValidateCatalog(request: APIRequestContext) {
  const response = await request.get('/BookStore/v1/Books');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.books.length).toBeGreaterThan(0);
  return body;
}