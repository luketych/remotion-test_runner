import { jest } from '@jest/globals';
import 'expect-puppeteer';

// Set default timeout for all tests
jest.setTimeout(30000);

beforeAll(async () => {
  // Navigate to the Viscera app before each test suite
  await page.goto('http://localhost:5173');
});

beforeEach(async () => {
  // Reset browser state before each test
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
});

afterAll(async () => {
  // Clean up after all tests
  await page.close();
});