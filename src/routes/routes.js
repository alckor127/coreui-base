import React from "react";

const Home = React.lazy(() => import("../views/Home/Home"));
const Products = React.lazy(() => import("../views/Products/Products"));
const NewProduct = React.lazy(() => import("../views/Products/NewProduct"));
const Inventory = React.lazy(() => import("../views/Products/Inventory"));

const routes = [
  // { path: "/", exact: true, name: "Inicio" },
  { path: "/home", name: "Inicio", component: Home },
  { path: "/products", exact: true, name: "Productos", component: Products },
  { path: "/products/all", name: "Todos los productos", component: Products },
  { path: "/products/new", name: "Agregar producto", component: NewProduct },
  { path: "/products/inventory", name: "Inventario", component: Inventory },
];

export { routes };
