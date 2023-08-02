// export {}
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://qiita.com/
  await page.goto('https://qiita.com/');

  // Click input[name="q"]
  await page.click('input[name="q"]');

  // Fill input[name="q"]
  await page.fill('input[name="q"]', 'playwright-cli');

  // Press Enter
  await page.press('input[name="q"]', 'Enter');
  // assert.equal(page.url(), 'https://qiita.com/search?q=playwright-cli');

  // Click text=/.*関連順.*/
  await page.click('text=/.*関連順.*/');

  // Click text=/.*新着順.*/
  await page.click('text=/.*新着順.*/');
  // assert.equal(page.url(), 'https://qiita.com/search?q=playwright-cli&sort=created');

  // Click div[id="main"] input[name="q"]
  await page.click('div[id="main"] input[name="q"]');

  // Fill div[id="main"] input[name="q"]
  await page.fill('div[id="main"] input[name="q"]', 'playwright-cli video');

  // Click text=/.*検索.*/
  await page.click('text=/.*検索.*/');
  // assert.equal(page.url(), 'https://qiita.com/search?sort=created&q=playwright-cli+video');

  // Click //*[local-name()="svg" and normalize-space(.)='Qiita']
  await page.click('//*[local-name()="svg" and normalize-space(.)=\'Qiita\']');
  // assert.equal(page.url(), 'https://qiita.com/');

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();