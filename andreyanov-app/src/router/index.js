import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import ContactPage from "@/pages/ContactPage";
import Products from "@/pages/Products";
import AboutPage from "@/pages/AboutPage";
import DeliveryAndPayments from "@/pages/DeliveryAndPayments";

import EditPage from "@/pages/EditPage";
import AddPage from "@/pages/AddPage";
import CartPage from "@/pages/CartPage";
import testAdd from "@/components/testAdd";
import ProductsList from "@/components/ProductsList";
import Signup from "@/pages/Signup";
import ProductInfoPage from "@/pages/ProductInfoPage";
import OrdersPage from "@/pages/OrdersPage";
import OrderInfo from "@/pages/OrderInfo";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/contact", component: ContactPage, name: "contactPage" },
  { path: "/products", component: Products, name: "productsPage" },
  {
    path: "/products/:category",
    component: ProductsList,
    name: "productsList",
  },
  {
    // path: "/product/:category/:id",
    path: "/product/:category/:id",
    component: ProductInfoPage,
    name: "productInfoPage",
  },
  { path: "/about", component: AboutPage, name: "aboutPage" },
  {
    path: "/delivery",
    component: DeliveryAndPayments,
    name: "deliveryAndPayments",
  },

  { path: "/products/edit/:id?", component: EditPage, name: "editPage" },
  { path: "/add", component: AddPage, name: "addPage" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/orders", component: OrdersPage, name: "ordersPage" },
  { path: "/testAdd", component: testAdd, name: "testAdd" },
  { path: "/signup", component: Signup, name: "signup" },
  { path: "/OrderInformation/:id?", component: OrderInfo, name: "orderInfo" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
