import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
  await page.getByRole('button', { name: 'Shake' }).click();
});




