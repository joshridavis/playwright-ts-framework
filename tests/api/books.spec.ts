import { test, expect } from '@playwright/test';

type Book = {
  isbn: string;
  title: string;
  author: string;
};

test.describe('Book Store API - books catalog', () => {
  test('GET /BookStore/v1/Books returns the catalog', async ({ request }) => {
    const response = await request.get('/BookStore/v1/Books');
    expect(response.status()).toBe(200);
    const body: { books: Book[] } = await response.json();
    expect(body.books.length).toBeGreaterThan(0);
    for (const book of body.books) {
      expect(typeof book.isbn).toBe('string');
      expect(book.title).toBeTruthy();
    }
  });

  test('GET /BookStore/v1/Books then calling the isbn return its catalog', async ({ request }) => {
    const response = await request.get('/BookStore/v1/Books');
    expect(response.status()).toBe(200);
    const data = await response.json(); 
    const isbn = data.books[0].isbn;
    const response2 = await request.get('/BookStore/v1/Book?ISBN=' + isbn);
    const data2 = await response.json(); 
    expect(response2.status()).toBe(200);
    expect(typeof data2.books[0].isbn).toBe('string');
    expect(data2.books[0].title).toBeTruthy();
  });

  test('Unknown ISBN is rejected', async ({ request }) => {
    const response = await request.get('/BookStore/v1/Book?ISBN=0000000000');
    expect(response.status()).toBe(400);
    const data = await response.json(); 
    expect(data.code).toBe('1205');
    expect(data.message).toBe('ISBN supplied is not available in Books Collection!');
  });

  test('Weak password is rejected when creating a user', async ({ request }) => {
    const response = await request.post('/Account/v1/User', {
        data: {
            userName: 'user_${Date.now()}}',
            password: 'abc',
        },
    });
    expect(response.status()).toBe(400);
    const data = await response.json(); 
    expect(data.code).toBe('1300');
    expect(data.message).toContain('Passwords must have at least one non alphanumeric character');
  });

  test('Login with a user that doesnt exist is refused', async ({ request }) => {
    const response = await request.post('/Account/v1/GenerateToken', {
        data: {
            userName: 'no_such_user_123',
            password: 'Whatever1!',
        },
    });
    expect(response.status()).toBe(200);
    const data = await response.json(); 
    expect(data.status).toBe('Failed');
    expect(data.result).toBe('User authorization failed.');
  });
});