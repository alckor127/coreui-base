const navigation = [
  {
    _tag: "CSidebarNavItem",
    name: "Inicio",
    to: "/home",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Productos",
    route: "/products",
    icon: "cil-tags",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Todos los productos",
        to: "/products/all",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Inventario",
        to: "/products/inventory",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Field Array",
    to: "/field-array",
    icon: "cil-code",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Formularios",
    to: "/forms",
    icon: "cil-heart"
  }
];

export { navigation };
