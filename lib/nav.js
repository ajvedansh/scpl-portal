// Left menu. Each group renders as a labelled block (label is optional).
export const NAV = [
  {
    label: null,
    items: [
      { label: "Dashboard",    icon: "home", href: "/dashboard" },
      { label: "All services", icon: "grid", href: "/dashboard#services" },
      { label: "My Profile",   icon: "user", href: "/dashboard/profile" },
    ],
  },
  {
    label: "Recharges and utilities",
    items: [
      { label: "Recharges", icon: "phone", href: "#" },
      { label: "PAN", icon: "id", href: "#" },
      { label: "Flight ticket", icon: "plane", href: "#" },
      { label: "Jharseva", icon: "users", href: "#" },
      { label: "Legal services", icon: "scale", href: "#" },
      { label: "Fastag services", icon: "car", href: "#" },
      { label: "MSME", icon: "briefcase", href: "#" },
      { label: "AEPS", icon: "finger", href: "#" },
    ],
  },
  {
    label: "Railway",
    items: [
      { label: "Train ticket", icon: "train", href: "#" },
      { label: "IRCTC tourism", icon: "globe", href: "#" },
    ],
  },
];
