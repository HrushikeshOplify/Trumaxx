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
          { name: "Ec Axial Fans", link: "/products/axial-fans/ec-axial-fans" },
        ],
      },
      {
        name: "Backward Curved Fans",
        submenu: true,
        link: "",
        sublink: [
          {
            name: "AC Axial Fans",
            link: "/products/backward-curved-fans/ac-axial-fans",
          },
          {
            name: "DC Axial Fans",
            link: "/products/backward-curved-fans/dc-axial-fans",
          },
          {
            name: "Ec Axial Fans",
            link: "/products/backward-curved-fans/ec-axial-fans",
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
            name: "Ec Compact Fans",
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
            link: "/products/shaded-pole-motors/ac-Shaded-Pole-Motors",
          },
          {
            name: "DC Shaded Pole Motors",
            link: "/products/shaded-pole-motors/dc-Shaded-Pole-Motors",
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
