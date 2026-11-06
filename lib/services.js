// Edit this file to change what appears on the dashboard.
// `groups` decides which tab shows the section: all | b2b | g2c | legal.
export const TABS = [
  { id: "all", label: "All services" },
  { id: "b2b", label: "B2B service" },
  { id: "g2c", label: "G2C service" },
  { id: "legal", label: "Legal service" },
];

export const SECTIONS = [
  {
    id: "util",
    title: "Recharges and utilities",
    groups: ["all", "b2b"],
    tone: "indigo",
    items: [
      { id: "mrecharge", label: "Mobile recharge", hint: "Prepaid top-up", icon: "phone", href: "#" },
      { id: "dth", label: "DTH recharge", hint: "All operators", icon: "tv", href: "#" },
      { id: "mbill", label: "Mobile bill", hint: "Postpaid payment", icon: "receipt", href: "#" },
      { id: "landline", label: "Landline bill", hint: "Pay by number", icon: "landline", href: "#" },
      { id: "electric", label: "Electricity bill", hint: "All boards", icon: "bolt", href: "#" },
      { id: "water", label: "Water bill", hint: "Municipal supply", icon: "drop", href: "#" },
      { id: "gas", label: "Gas bill", hint: "Cylinder and piped", icon: "flame", href: "#" },
      { id: "fastag", label: "Fastag services", hint: "Recharge and more", icon: "car", href: "#" },
    ],
  },
  {
    id: "travel",
    title: "Travel and railway",
    groups: ["all", "b2b"],
    tone: "orange",
    items: [
      { id: "flight", label: "Flight ticket", hint: "Domestic and international", icon: "plane", href: "#" },
      { id: "train", label: "Train ticket", hint: "IRCTC booking", icon: "train", href: "#" },
      { id: "tourism", label: "IRCTC tourism", hint: "Tour packages", icon: "globe", href: "#" },
    ],
  },
  {
    id: "gov",
    title: "Government and citizen services",
    groups: ["all", "g2c"],
    tone: "indigo",
    items: [
      { id: "pan", label: "PAN", hint: "Apply and correct", icon: "id", href: "#" },
      { id: "jharseva", label: "Jharseva", hint: "Citizen services", icon: "users", href: "#" },
    ],
  },
  {
    id: "legal",
    title: "Legal services",
    groups: ["all", "legal"],
    tone: "indigo",
    items: [
      { id: "legal", label: "Legal services", hint: "Documents and advice", icon: "scale", href: "#" },
    ],
  },
  {
    id: "bank",
    title: "Business and banking",
    groups: ["all", "b2b"],
    tone: "indigo",
    items: [
      { id: "msme", label: "MSME", hint: "Business registration", icon: "briefcase", href: "#" },
      { id: "aeps", label: "AEPS", hint: "Aadhaar payments", icon: "finger", href: "#" },
    ],
  },
];
