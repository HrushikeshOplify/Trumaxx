export const Linksdata = [
  {
    name: "Home",
    link: "/",
    submenu: false,
    sublinks: [{ link: "", submenu: false }],
  },
  {
    name: "Company",
    link: "",
    submenu: true,
    sublinks: [
      { name: "About Us", link: "/company/about-us", submenu: false },
      {
        name: "Leadership Team",
        link: "/company/leadership-team",
        submenu: false,
      },
      { name: "History", link: "/company/history", submenu: false },
      { name: "ESG", link: "/company/esg", submenu: false },
    ],
  },
  {
    name: "Product",
    link: "",
    submenu: true,
    sublinks: [
      {
        name: "Axial Fans",

        submenu: true,
        link: "",
        sublink: [
          { name: "AC Axial Fans", link: "/products/axial-fans/ac-axial-fans" },
          { name: "DC Axial Fans", link: "/products/axial-fans/dc-axial-fans" },
          { name: "EC Axial Fans", link: "/products/axial-fans/ec-axial-fans" },
        ],
      },
      {
        name: "Backward Curved Fans",
        submenu: true,
        link: "",
        sublink: [
          {
            name: "AC Backward Curved Fans",
            link: "/products/backward-curved-fans/ac-backward-curved-fans",
          },
          {
            name: "DC Backward Curved Fans",
            link: "/products/backward-curved-fans/dc-backward-curved-fans",
          },
          {
            name: "EC Backward Curved Fans",
            link: "/products/backward-curved-fans/ec-backward-curved-fans",
          },
        ],
      },
      {
        name: "Compact Fans",
        submenu: true,
        link: "",
        sublink: [
          {
            name: "AC Compact Fans",
            link: "/products/compact-fans/ac-compact-fans",
          },
          {
            name: "DC Compact Fans",
            link: "/products/compact-fans/dc-compact-fans",
          },
          {
            name: "EC Compact Fans",
            link: "/products/compact-fans/ec-compact-fans",
          },
        ],
      },
      {
        name: "Shaded Pole Motors",
        submenu: true,
        link: "",
        sublink: [
          {
            name: "AC Shaded Pole Motors",
            link: "/products/shaded-pole-motors/ac-shaded-pole-motors",
          },
          {
            name: "DC Shaded Pole Motors",
            link: "/products/shaded-pole-motors/dc-shaded-pole-motors",
          },
        ],
      },
      {
        name: "Blowers",
        submenu: true,
        link: "",
        sublink: [{ name: "DC Blowers", link: "/products/blowers/dc-blowers" }],
      },
    ],
  },
  {
    name: "Applications",
    link: "/application",
    submenu: false,
    sublinks: [{ link: "", submenu: false }],
  },
  {
    name: "Testing",
    link: "/testing",
    submenu: false,
    sublinks: [{ link: "", submenu: false }],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    submenu: false,
    sublinks: [{ link: "", submenu: false }],
  },
];
