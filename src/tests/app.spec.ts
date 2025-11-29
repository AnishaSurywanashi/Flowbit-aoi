// src/tests/app.spec.ts
import { test, expect } from '@playwright/test';

test('App loads correctly with sidebar, AOI panel, and map', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Sidebar should be visible
  await expect(page.getByTestId('sidebar')).toBeVisible();


  // AOI panel
  await expect(page.getByTestId('aoi-panel')).toBeVisible();

  // Header text exists
  await expect(page.getByText('Define Area of Interest')).toBeVisible();

  // Title exists
  await expect(page.getByTestId('aoi-title')).toBeVisible();

  // Map loads
  await expect(page.locator('.leaflet-container')).toBeVisible();

  // Zoom controls visible
  await expect(page.getByTestId('zoom-controls')).toBeVisible();
});


test('Layer toggle hides and shows WMS overlay tiles', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const checkbox = page.getByTestId('layer-checkbox');

  // Check overlay tiles BEFORE turning off
  const overlayBefore = await page.locator('.wms-overlay img').count();
  expect(overlayBefore).toBeGreaterThan(0);

  // Turn OFF overlay
  await checkbox.uncheck();
  await page.waitForTimeout(600); // allow tiles to refresh

  // Overlay tiles should now be gone
  const overlayAfter = await page.locator('.wms-overlay img').count();
  expect(overlayAfter).toBeLessThan(1);
});
