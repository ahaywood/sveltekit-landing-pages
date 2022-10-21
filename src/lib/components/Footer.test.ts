import { test, expect } from '@playwright/test';
import Footer from './Footer.svelte';

test('footer shows the correct year', async ({ mount }) => {
  const component = await mount(Footer)
  await expect(component).toContainText('2022');
});