import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import ContactPage from "@/pages/EditPage";
import Products from "@/pages/Products";
import About from "@/pages/About";
import DeliveryAndPayments from "@/pages/DeliveryAndPayments";

import EditPage from "@/pages/EditPage";
import AddPage from "@/pages/AddPage";
import CartPage from "@/pages/CartPage";
import testAdd from "@/components/testAdd";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/contact", component: ContactPage, name: "contactPage" },
  { path: "/products", component: Products, name: "productsPage" },
  { path: "/about", component: About, name: "about" },
  {
    path: "/delivery",
    component: DeliveryAndPayments,
    name: "deliveryAndPayments",
  },

  { path: "/edit/:id", component: EditPage, name: "editPage" },
  { path: "/add", component: AddPage, name: "addPage" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/testAdd", component: testAdd, name: "testAdd" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
