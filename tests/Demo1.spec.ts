// 1. Import Playwright test and expect
import { test, expect, chromium } from '@playwright/test';

// 2. Create a test, browser context and page
test('TestAutomationPractice form validation', async ({  }) => {
    const  browser=await chromium.launch();
            const  context=await browser.newContext();
            const  page= await context.newPage();
  test.slow();

  // 3. Navigate to the application URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 4. Locate the Name input and type "Test"
  await page.locator('#name').fill('Test');
  test.slow();

  // 5. Locate the country dropdown and select "India"
  await page.selectOption('#country', 'India');
  test.slow();

  // 6. Use getByLabel to grab the locator for Sunday checkbox
  const sundayCheckbox = page.getByLabel('Sunday');
  test.slow();

  // 7. Assert that Sunday text is present
  await expect(sundayCheckbox).toBeVisible();

//    import{test,expect} from  '@playwright/test'
//  test('Testcase1',async()){
//             const  browser=await chromium.launch();
//             const  context=await browser.newcontext();
//             const  page= await context.newpage();
//             await page.goto("testautomationpractice.blogspot.com");
//           await  page.locator(id='name').fill('hanamant');
//      await page.locator(id='country').selectoption('India');
//      await  page.getByLabel(class="form-check-label").checked('Sunday');
//             await expect('Day').tohaveTitle('Sunday');

});
