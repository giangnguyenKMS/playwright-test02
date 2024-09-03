import {test as base} from "@playwright/test";
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashBoardPage';
import { CartPage } from "./CartPage";
import { OrdersReviewPage } from "./OrdersReviewPage";


export const test = base.extend<{
  loginPage: LoginPage; 
  dashBoardPage: DashboardPage; 
  cartPage: CartPage;
  ordersReviewPage: OrdersReviewPage;
}> ({
  // Define the Fixtures
  loginPage: async ({page}, use) => {
  await use(new LoginPage(page));
  },

  dashBoardPage: async ({page}, use) => {
    await use(new DashboardPage(page));
  },

  cartPage: async ({page}, use) => {
    await use(new CartPage(page));
  },

  ordersReviewPage: async ({page}, use) => {
    await use(new OrdersReviewPage(page));
  }
})
