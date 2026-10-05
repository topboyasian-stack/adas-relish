const {
  useState,
  useMemo
} = React;

/* ---------- Brand tokens ---------- */
const TEAL = "#0B4A4A";
const TEAL_DEEP = "#082F2F";
const ORANGE = "#E8631B";
const CREAM = "#FBF8F2";
const INK = "#1A1F1E";
const GOLD = "#F2A93D";
const WHATSAPP_NUMBER = "2348187882000";

/* ---------- Menu data ---------- */
const CATEGORIES = ["Rice Dishes", "Soups & Sauces", "Peppersoup", "Sandwiches & Wraps", "Small Chops & Sides", "Drinks & Desserts"];
const MENU = [{
  id: "d1",
  name: "Chinese Fried Rice",
  cat: "Rice Dishes",
  price: 13000,
  desc: "Wok-tossed rice, mixed veg, prawns & shredded chicken.",
  featured: true,
  tag: "Best seller"
}, {
  id: "d2",
  name: "Mexican Rice",
  cat: "Rice Dishes",
  price: 11200,
  desc: "Smoky tomato rice with peppers, sweetcorn and kidney beans.",
  featured: true
}, {
  id: "d3",
  name: "Coconut Pasta",
  cat: "Rice Dishes",
  price: 11000,
  desc: "Penne in a creamy coconut-pepper sauce, grilled prawns.",
  featured: true
}, {
  id: "d4",
  name: "Party Jollof Rice",
  cat: "Rice Dishes",
  price: 9500,
  desc: "Smoky, slow-cooked party-style jollof with fried plantain."
}, {
  id: "d5",
  name: "Ofada Rice & Ayamase",
  cat: "Rice Dishes",
  price: 10500,
  desc: "Local ofada rice, green pepper sauce, assorted meat."
}, {
  id: "d6",
  name: "Native Rice",
  cat: "Rice Dishes",
  price: 9800,
  desc: "Palm-oil rice with smoked fish, ugu and locust beans."
}, {
  id: "d7",
  name: "Egusi Soup & Pounded Yam",
  cat: "Soups & Sauces",
  price: 8500,
  desc: "Ground melon-seed soup, assorted meat, swallow of choice.",
  featured: true,
  tag: "Chef's pick"
}, {
  id: "d8",
  name: "Efo Riro",
  cat: "Soups & Sauces",
  price: 7800,
  desc: "Spinach stew with assorted meat, stockfish and crayfish."
}, {
  id: "d9",
  name: "Banga Soup",
  cat: "Soups & Sauces",
  price: 8200,
  desc: "Palm-nut soup with fresh fish, spiced with native herbs."
}, {
  id: "d10",
  name: "Okra Soup",
  cat: "Soups & Sauces",
  price: 7500,
  desc: "Silky okra, seafood mix, served with any swallow."
}, {
  id: "d11",
  name: "Goat Meat Peppersoup",
  cat: "Peppersoup",
  price: 6500,
  desc: "Bone-in goat meat in a fiery, aromatic native pepper broth.",
  featured: true
}, {
  id: "d12",
  name: "Catfish Peppersoup",
  cat: "Peppersoup",
  price: 7000,
  desc: "Whole catfish simmered in a light, uziza-spiced broth."
}, {
  id: "d13",
  name: "Chicken Peppersoup",
  cat: "Peppersoup",
  price: 6000,
  desc: "Free-range chicken in a warming pepper-soup spice mix."
}, {
  id: "d14",
  name: "Chicken Shawarma",
  cat: "Sandwiches & Wraps",
  price: 4500,
  desc: "Grilled chicken, garlic sauce, pickles, wrapped fresh."
}, {
  id: "d15",
  name: "Club Sandwich",
  cat: "Sandwiches & Wraps",
  price: 5200,
  desc: "Triple-decker with chicken, egg, lettuce and tomato."
}, {
  id: "d16",
  name: "Beef & Cheese Wrap",
  cat: "Sandwiches & Wraps",
  price: 5000,
  desc: "Seasoned beef strips, melted cheese, chipotle mayo."
}, {
  id: "d17",
  name: "Suya Platter",
  cat: "Small Chops & Sides",
  price: 6000,
  desc: "Spiced grilled beef skewers, onions and yaji dust.",
  featured: true
}, {
  id: "d18",
  name: "Asun (Spicy Goat)",
  cat: "Small Chops & Sides",
  price: 6500,
  desc: "Chargrilled peppered goat meat, sliced and smoky."
}, {
  id: "d19",
  name: "Moin Moin",
  cat: "Small Chops & Sides",
  price: 2500,
  desc: "Steamed bean pudding with egg and fish, wrapped in leaf."
}, {
  id: "d20",
  name: "Puff Puff (6 pcs)",
  cat: "Small Chops & Sides",
  price: 2000,
  desc: "Golden, pillow-soft fried dough balls, lightly sweet."
}, {
  id: "d21",
  name: "Grilled Skewers",
  cat: "Small Chops & Sides",
  price: 5500,
  desc: "Mixed chicken and beef skewers, chef's spice rub."
}, {
  id: "d22",
  name: "Garden Salad",
  cat: "Small Chops & Sides",
  price: 3500,
  desc: "Crisp seasonal vegetables, house vinaigrette."
}, {
  id: "d23",
  name: "Chin Chin (Family Pack)",
  cat: "Drinks & Desserts",
  price: 3000,
  desc: "Crunchy spiced pastry bites, made fresh weekly."
}, {
  id: "d24",
  name: "Zobo (1L)",
  cat: "Drinks & Desserts",
  price: 2500,
  desc: "Chilled hibiscus drink, ginger and fruit infused."
}, {
  id: "d25",
  name: "Belgian Waffles",
  cat: "Drinks & Desserts",
  price: 4800,
  desc: "Warm waffles, maple syrup, seasonal fruit.",
  featured: true
}, {
  id: "d26",
  name: "Chapman (1L)",
  cat: "Drinks & Desserts",
  price: 3200,
  desc: "House-blend chapman, chilled and fruit-garnished."
}];
const GALLERY = [{
  id: "g1",
  title: "Shrimp Jollof Tray",
  tall: true
}, {
  id: "g2",
  title: "Belgian Waffles"
}, {
  id: "g3",
  title: "Grilled Skewer Platter"
}, {
  id: "g4",
  title: "Garden Salad Bowl"
}, {
  id: "g5",
  title: "Chinese Fried Rice",
  tall: true
}, {
  id: "g6",
  title: "Club Sandwich Stack"
}, {
  id: "g7",
  title: "Party Jollof Spread"
}, {
  id: "g8",
  title: "Suya Platter"
}, {
  id: "g9",
  title: "Zobo & Chapman",
  tall: true
}];
const naira = n => "₦" + n.toLocaleString("en-NG");

/* ---------- Inline icon set (no external icon library, so this deploys with zero build step) ---------- */
const Icon = ({
  children,
  size = 18,
  color = "currentColor"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const ShoppingBagIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));
const PlusIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const MinusIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}));
const XIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const MapPinIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const ClockIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6v6l4 2"
}));
const PhoneIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1Z"
}));
const InstagramIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 6.5h.01"
}));
const MessageCircleIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.6 8.6 0 0 1-4-.9L3 21l1.9-5.5a8.5 8.5 0 1 1 16.1-4Z"
}));
const ChevronRightIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m9 6 6 6-6 6"
}));
const MenuBarsIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}));

/* ---------- Small building blocks ---------- */

function LogoMark({
  size = 40,
  color = CREAM
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 6c-9 0-15 6-15 13 0 5 3 8 6 10-1 3-2 6-2 9 0 7 5 12 11 12s11-5 11-12c0-3-1-6-2-9 3-2 6-5 6-10 0-7-6-13-15-13Z",
    stroke: color,
    strokeWidth: "2.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 46c0 6 5 11 12 11s12-5 12-11",
    stroke: color,
    strokeWidth: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 46v10M32 46v10M40 46v10",
    stroke: color,
    strokeWidth: "1.6"
  }));
}
function WatermarkLogo({
  opacity = 0.06,
  size = 640,
  spin = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity,
      animation: spin ? "spinSlow 90s linear infinite" : "none"
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: size,
    color: TEAL
  })));
}
function NavBar({
  page,
  setPage,
  cartCount
}) {
  const [open, setOpen] = useState(false);
  const links = [["home", "Home"], ["menu", "Menu"], ["gallery", "Gallery"], ["about", "About Ada"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: CREAM,
      borderBottom: `1px solid ${TEAL}22`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 30,
    color: TEAL
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 20,
      color: TEAL,
      fontStyle: "italic"
    }
  }, "Ada's Relish")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links",
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setPage(key),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      color: page === key ? ORANGE : INK,
      fontWeight: page === key ? 600 : 500,
      paddingBottom: 3,
      borderBottom: page === key ? `2px solid ${ORANGE}` : "2px solid transparent"
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("cart"),
    style: {
      position: "relative",
      background: TEAL,
      border: "none",
      borderRadius: 10,
      padding: "9px 14px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(ShoppingBagIcon, {
    size: 17,
    color: CREAM
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: CREAM,
      fontFamily: "General Sans, sans-serif",
      fontSize: 14
    }
  }, "Cart"), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -7,
      right: -7,
      background: ORANGE,
      color: CREAM,
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 999,
      minWidth: 19,
      height: 19,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "General Sans, sans-serif"
    }
  }, cartCount))), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    onClick: () => setOpen(!open),
    style: {
      display: "none",
      background: "none",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(MenuBarsIcon, {
    size: 24,
    color: TEAL
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile",
    style: {
      display: "none",
      flexDirection: "column",
      padding: "0 20px 16px",
      gap: 12
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => {
      setPage(key);
      setOpen(false);
    },
    style: {
      textAlign: "left",
      background: "none",
      border: "none",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      color: page === key ? ORANGE : INK,
      padding: "6px 0"
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPage("cart");
      setOpen(false);
    },
    style: {
      textAlign: "left",
      background: "none",
      border: "none",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      color: INK,
      padding: "6px 0"
    }
  }, "Cart (", cartCount, ")")), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
          .nav-burger { display: block !important; }
          .nav-mobile { display: flex !important; }
        }
      `));
}
function PlatePlaceholder({
  name,
  tall = false,
  big = false
}) {
  const size = big ? 220 : 150;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: tall ? "3/4" : "1/1",
      borderRadius: big ? 24 : "50%",
      background: `radial-gradient(circle at 35% 30%, ${GOLD}33, ${TEAL} 70%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      border: `3px solid ${CREAM}`,
      boxShadow: "0 6px 18px rgba(11,74,74,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.15
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: size,
    color: CREAM
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      color: CREAM,
      fontSize: big ? 16 : 12,
      textAlign: "center",
      padding: "0 16px",
      lineHeight: 1.3
    }
  }, name));
}
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13,
      letterSpacing: 0.3,
      color: ORANGE,
      marginBottom: 10,
      fontWeight: 600
    }
  }, children);
}

/* ---------- Pages ---------- */

function HomePage({
  setPage,
  addToCart
}) {
  const featured = MENU.filter(m => m.featured).slice(0, 4);
  const values = [["Fresh", "Sourced and prepped the same day, every day."], ["Hygienic", "Clean kitchen practices from prep to pack."], ["Delicious", "Recipes tuned by a private chef, not a fast-food line."], ["Satisfying", "Portions built for a real meal, not a snack."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: TEAL,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(WatermarkLogo, {
    opacity: 0.10,
    size: 720,
    spin: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 20px 76px",
      display: "grid",
      gridTemplateColumns: "0.85fr 1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      borderRadius: 20,
      background: `linear-gradient(160deg, ${GOLD}, ${ORANGE})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 90,
    color: CREAM
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      color: CREAM,
      fontSize: 20,
      marginTop: 14
    }
  }, "Chef Ada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: CREAM,
      fontSize: 12,
      opacity: 0.85,
      marginTop: 4
    }
  }, "portrait — drop in real photo"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: GOLD,
      fontSize: 14,
      marginBottom: 14
    }
  }, "Private chef · Lekki, Lagos · Est. 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 52,
      lineHeight: 1.08,
      color: CREAM,
      margin: 0
    }
  }, "Taste the love, savor the difference."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: `${CREAM}CC`,
      fontSize: 17,
      marginTop: 20,
      maxWidth: 480,
      lineHeight: 1.6
    }
  }, "Chef-led Nigerian and continental plates, cooked fresh in small batches and delivered across Lagos — from Sunday jollof to a full private dinner."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("menu"),
    style: {
      background: ORANGE,
      color: CREAM,
      border: "none",
      borderRadius: 10,
      padding: "13px 26px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, "Browse the menu ", /*#__PURE__*/React.createElement(ChevronRightIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("contact"),
    style: {
      background: "transparent",
      color: CREAM,
      border: `1.5px solid ${CREAM}55`,
      borderRadius: 10,
      padding: "13px 26px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Order via WhatsApp"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: CREAM,
      borderBottom: `1px solid ${TEAL}18`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "34px 20px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    },
    className: "values-grid"
  }, values.map(([title, sub]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      fontSize: 20,
      color: TEAL
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13.5,
      color: `${INK}99`,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 20px"
    }
  }, /*#__PURE__*/React.createElement(WatermarkLogo, {
    opacity: 0.04,
    size: 480
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "From the kitchen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 32,
      color: TEAL,
      margin: 0
    }
  }, "Featured this week")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("menu"),
    style: {
      background: "none",
      border: "none",
      color: ORANGE,
      fontFamily: "General Sans, sans-serif",
      fontSize: 14,
      cursor: "pointer",
      fontWeight: 600
    }
  }, "Full menu →")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 22
    },
    className: "featured-grid"
  }, featured.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      background: "#fff",
      borderRadius: 18,
      padding: 18,
      border: `1px solid ${TEAL}14`
    }
  }, /*#__PURE__*/React.createElement(PlatePlaceholder, {
    name: d.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 17,
      color: TEAL,
      marginTop: 14
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13,
      color: `${INK}88`,
      marginTop: 4,
      lineHeight: 1.45,
      minHeight: 36
    }
  }, d.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontWeight: 700,
      color: INK
    }
  }, naira(d.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => addToCart(d),
    style: {
      background: TEAL,
      border: "none",
      borderRadius: 8,
      padding: "7px 12px",
      color: CREAM,
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "General Sans, sans-serif"
    }
  }, "Add")))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
          .featured-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `));
}
function MenuPage({
  addToCart
}) {
  const [active, setActive] = useState("All");
  const cats = ["All", ...CATEGORIES];
  const items = active === "All" ? MENU : MENU.filter(m => m.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "48px 20px 80px"
    }
  }, /*#__PURE__*/React.createElement(WatermarkLogo, {
    opacity: 0.035,
    size: 520
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Full menu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 38,
      color: TEAL,
      margin: 0
    }
  }, "What's cooking"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: `${INK}88`,
      fontSize: 15,
      marginTop: 8,
      maxWidth: 520
    }
  }, "Every dish is made to order. Add what you like, then send it straight to Ada on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setActive(c),
    style: {
      background: active === c ? TEAL : "#fff",
      color: active === c ? CREAM : INK,
      border: `1px solid ${active === c ? TEAL : TEAL + "33"}`,
      borderRadius: 999,
      padding: "8px 16px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 13.5,
      cursor: "pointer"
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 34
    },
    className: "menu-grid"
  }, items.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: 16,
      border: `1px solid ${TEAL}14`,
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PlatePlaceholder, {
    name: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 15.5,
      color: TEAL
    }
  }, d.name), d.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 10,
      color: ORANGE,
      background: `${ORANGE}14`,
      borderRadius: 6,
      padding: "2px 6px",
      whiteSpace: "nowrap",
      height: "fit-content"
    }
  }, d.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 12.5,
      color: `${INK}88`,
      marginTop: 4,
      lineHeight: 1.45
    }
  }, d.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      color: INK
    }
  }, naira(d.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => addToCart(d),
    style: {
      background: TEAL,
      border: "none",
      borderRadius: 7,
      padding: "6px 11px",
      color: CREAM,
      cursor: "pointer",
      fontSize: 12.5,
      fontFamily: "General Sans, sans-serif"
    }
  }, "Add"))))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) { .menu-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .menu-grid { grid-template-columns: 1fr !important; } }
      `));
}
function GalleryPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "48px 20px 80px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Lookbook"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 38,
      color: TEAL,
      margin: 0
    }
  }, "A gallery of the work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: `${INK}88`,
      fontSize: 15,
      marginTop: 8,
      maxWidth: 520
    }
  }, "Plated for private dinners, trays for parties, and everything in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      columnCount: 3,
      columnGap: 18,
      marginTop: 34
    },
    className: "masonry"
  }, GALLERY.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.id,
    style: {
      breakInside: "avoid",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: g.tall ? "3/4" : "4/3",
      borderRadius: 16,
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(155deg, ${TEAL}, ${TEAL_DEEP})`,
      display: "flex",
      alignItems: "flex-end",
      border: `1px solid ${TEAL}22`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 90,
    color: CREAM
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      color: CREAM,
      fontSize: 15
    }
  }, g.title)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: `${INK}66`,
      fontSize: 12.5,
      marginTop: 20
    }
  }, "Placeholder frames shown — swap in Ada's real food photography here."), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) { .masonry { column-count: 2 !important; } }
        @media (max-width: 560px) { .masonry { column-count: 1 !important; } }
      `));
}
function AboutPage({
  setPage
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: TEAL,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(WatermarkLogo, {
    opacity: 0.08,
    size: 520
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 900,
      margin: "0 auto",
      padding: "64px 20px 56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: GOLD,
      fontSize: 14,
      marginBottom: 12
    }
  }, "The chef behind the kitchen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      fontSize: 42,
      color: CREAM,
      margin: 0
    }
  }, "Ada"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "56px 20px 80px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 22,
      color: TEAL,
      lineHeight: 1.6,
      fontStyle: "italic"
    }
  }, "\"Every tray that leaves this kitchen carries the same standard I'd set for my own family's table.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 15.5,
      color: INK,
      lineHeight: 1.85,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", null, "Ada started cooking the way most Nigerian chefs do — in a family kitchen, for people she loved, long before it was a business. That instinct is still the whole philosophy behind Ada's Relish: fresh ingredients, hygienic prep, and recipes built to satisfy, not just to look good on a plate."), /*#__PURE__*/React.createElement("p", null, "Today she runs a private-chef kitchen out of Lekki, cooking everything from Sunday jollof for one household to full catering spreads for weddings and corporate events, with orders also reaching Abuja for private engagements. Her menu leans on Nigerian classics — egusi, ofada, peppersoup, suya — alongside continental plates like coconut pasta and Mexican rice, all cooked fresh to order rather than held in a warmer."), /*#__PURE__*/React.createElement("p", null, "Fresh, hygienic, delicious, satisfying — those aren't taglines here, they're the four things Ada checks before any tray leaves the kitchen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
      marginTop: 40
    },
    className: "about-grid"
  }, [["Private dinners", "Multi-course menus cooked on-site for small gatherings."], ["Party catering", "Full trays and event-scale spreads across Lagos & Abuja."], ["Daily orders", "À la carte dishes delivered across Lagos, 8AM – 10PM."], ["Custom menus", "Dietary requests and bespoke menus on request."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: `1px solid ${TEAL}22`,
      borderRadius: 14,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 17,
      color: TEAL
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13.5,
      color: `${INK}88`,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, d)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("contact"),
    style: {
      marginTop: 40,
      background: ORANGE,
      color: CREAM,
      border: "none",
      borderRadius: 10,
      padding: "13px 26px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Get in touch with Ada")), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 560px) { .about-grid { grid-template-columns: 1fr !important; } }`));
}
function CartPage({
  cart,
  updateQty,
  removeItem,
  setPage
}) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const sendOrder = () => {
    const lines = cart.map(i => `• ${i.name} x${i.qty} — ${naira(i.price * i.qty)}`).join("\n");
    const msg = `Hi Ada, I'd like to place an order:\n\n${lines}\n\nTotal: ${naira(total)}\n\n(Note: Glovo delivery has a ₦400 fee under ₦3,000)`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  if (cart.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600,
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(ShoppingBagIcon, {
      size: 40,
      color: `${TEAL}55`
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "Fraunces, serif",
        fontSize: 26,
        color: TEAL,
        marginTop: 16
      }
    }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "General Sans, sans-serif",
        color: `${INK}88`,
        fontSize: 14.5,
        marginTop: 8
      }
    }, "Add a few dishes from the menu to build your order."), /*#__PURE__*/React.createElement("button", {
      onClick: () => setPage("menu"),
      style: {
        marginTop: 22,
        background: TEAL,
        color: CREAM,
        border: "none",
        borderRadius: 10,
        padding: "12px 24px",
        fontFamily: "General Sans, sans-serif",
        fontSize: 14.5,
        cursor: "pointer"
      }
    }, "Browse the menu"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "48px 20px 90px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Review order"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 32,
      color: TEAL,
      margin: 0
    }
  }, "Your cart"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, cart.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "#fff",
      border: `1px solid ${TEAL}14`,
      borderRadius: 14,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PlatePlaceholder, {
    name: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 15.5,
      color: TEAL
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13,
      color: `${INK}88`
    }
  }, naira(i.price), " each")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: CREAM,
      borderRadius: 8,
      padding: "4px 8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQty(i.id, -1),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    size: 14,
    color: TEAL
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 13.5,
      minWidth: 16,
      textAlign: "center"
    }
  }, i.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQty(i.id, 1),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(PlusIcon, {
    size: 14,
    color: TEAL
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      minWidth: 76,
      textAlign: "right"
    }
  }, naira(i.price * i.qty)), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeItem(i.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(XIcon, {
    size: 16,
    color: `${INK}66`
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: `${TEAL}0A`,
      border: `1px solid ${TEAL}22`,
      borderRadius: 14,
      padding: 16,
      fontFamily: "General Sans, sans-serif",
      fontSize: 13,
      color: `${INK}99`,
      lineHeight: 1.5
    }
  }, "Delivered via Glovo. Orders under ", naira(3000), " carry a ", naira(400), " small-order fee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24,
      paddingTop: 20,
      borderTop: `1px solid ${TEAL}22`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 18,
      color: TEAL
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 22,
      fontWeight: 700,
      color: INK
    }
  }, naira(total))), /*#__PURE__*/React.createElement("button", {
    onClick: sendOrder,
    style: {
      marginTop: 24,
      width: "100%",
      background: "#25D366",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      padding: "15px 24px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15.5,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MessageCircleIcon, {
    size: 19
  }), " Send order via WhatsApp"));
}
function ContactPage() {
  const waMsg = encodeURIComponent("Hi Ada, I'd like to place an order.");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "48px 20px 90px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Reach the kitchen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 38,
      color: TEAL,
      margin: 0
    }
  }, "Order or say hello"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28,
      marginTop: 34
    },
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [[MapPinIcon, "Location", "Chevron Drive, Bourdillon Court Estate, Lekki, Lagos"], [ClockIcon, "Hours", "Open daily · 8AM – 10PM"], [PhoneIcon, "Call", "0909 481 0000"], [MessageCircleIcon, "WhatsApp", "0818 788 2000"], [InstagramIcon, "Instagram", "@adas_relish"]].map(([IconC, label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `${TEAL}14`,
      borderRadius: 10,
      padding: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconC, {
    size: 18,
    color: TEAL
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 12.5,
      color: `${INK}77`
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 16.5,
      color: INK,
      marginTop: 2
    }
  }, val)))), /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`,
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginTop: 10,
      background: "#25D366",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      padding: "15px 24px",
      fontFamily: "General Sans, sans-serif",
      fontSize: 15,
      fontWeight: 600,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: "fit-content"
    }
  }, /*#__PURE__*/React.createElement(MessageCircleIcon, {
    size: 18
  }), " Message on WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: `linear-gradient(155deg, ${TEAL}, ${TEAL_DEEP})`,
      position: "relative",
      overflow: "hidden",
      minHeight: 280,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(WatermarkLogo, {
    opacity: 0.14,
    size: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(MapPinIcon, {
    size: 26,
    color: CREAM
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      color: CREAM,
      fontSize: 15,
      marginTop: 10
    }
  }, "Chevron Drive, Bourdillon Court Estate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      color: `${CREAM}AA`,
      fontSize: 12.5,
      marginTop: 4
    }
  }, "Lekki, Lagos — also serving events in Abuja")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 800px) { .contact-grid { grid-template-columns: 1fr !important; } }`));
}
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: TEAL_DEEP,
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 24,
    color: CREAM
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      color: CREAM,
      fontSize: 16
    }
  }, "Ada's Relish")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "General Sans, sans-serif",
      fontSize: 12.5,
      color: `${CREAM}88`
    }
  }, "Chevron Drive, Bourdillon Court Estate, Lekki, Lagos · 0818 788 2000")));
}

/* ---------- App ---------- */

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const addToCart = dish => {
    setCart(prev => {
      const existing = prev.find(i => i.id === dish.id);
      if (existing) return prev.map(i => i.id === dish.id ? {
        ...i,
        qty: i.qty + 1
      } : i);
      return [...prev, {
        ...dish,
        qty: 1
      }];
    });
  };
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? {
      ...i,
      qty: Math.max(1, i.qty + delta)
    } : i).filter(i => i.qty > 0));
  };
  const removeItem = id => setCart(prev => prev.filter(i => i.id !== id));
  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);
  const pages = {
    home: /*#__PURE__*/React.createElement(HomePage, {
      setPage: setPage,
      addToCart: addToCart
    }),
    menu: /*#__PURE__*/React.createElement(MenuPage, {
      addToCart: addToCart
    }),
    gallery: /*#__PURE__*/React.createElement(GalleryPage, null),
    about: /*#__PURE__*/React.createElement(AboutPage, {
      setPage: setPage
    }),
    cart: /*#__PURE__*/React.createElement(CartPage, {
      cart: cart,
      updateQty: updateQty,
      removeItem: removeItem,
      setPage: setPage
    }),
    contact: /*#__PURE__*/React.createElement(ContactPage, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CREAM,
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    page: page,
    setPage: setPage,
    cartCount: cartCount
  }), pages[page], /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
