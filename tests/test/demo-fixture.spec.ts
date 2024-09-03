import { test} from './my-fixture';
import { expect} from '@playwright/test';
let webContext;

test.beforeAll(async({browser}) => {
  webContext= await browser.newContext({storageState:'auth.json'});
})

test('@demo_fixture authentication test', {
  tag: [
    '@demo',
    '@smoke',
  ]
}, async() => {
  // const email = "rahulshetty@gmail.com";
  const productName = 'IPHONE 13 PRO';
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body");
  const titles= await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();

  for(let i =0; i < count; ++i) {
    if(await products.nth(i).locator("b").textContent() === productName) {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool =await page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(bool).toBeTruthy();
});

test('@demo_fixture Test case 2',{
  tag: [
    '@demo',
    '@smoke',
  ]
}, async() => {
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body");
  const titles= await page.locator(".card-body b").allTextContents();
  console.log(titles);
})
