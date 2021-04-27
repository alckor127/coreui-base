import React from "react";

const Home = React.lazy(() => import("../views/Home/Home"));
const Products = React.lazy(() => import("../views/Products/Products"));
const ProductNew = React.lazy(() => import("../views/Products/New"));
const Inventory = React.lazy(() => import("../views/Products/Inventory"));
const FieldArray = React.lazy(() => import("../views/FieldArray/FieldArray"));
const Forms = React.lazy(() => import("../views/Forms/Forms"));
const FormNew = React.lazy(() => import("../views/Forms/New"));

const routes = [
  { path: "/home", name: "Inicio", component: Home },
  { path: "/products", exact: true, name: "Productos", component: Products },
  { path: "/products/all", name: "Todos los productos", component: Products },
  { path: "/products/new", name: "Agregar producto", component: ProductNew },
  { path: "/products/inventory", name: "Inventario", component: Inventory },
  { path: "/field-array", name: "Field Array", component: FieldArray },
  { path: "/forms", exact: true, name: "Formularios", component: Forms },
  { path: "/forms/new", name: "Nuevo formulario", component: FormNew },
];

export { routes };
