import DashboardShell from "@/components/DashboardShell";

export const metadata = { title: "Dashboard · SCPL" };

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
