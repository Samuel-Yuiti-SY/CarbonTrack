import { AppShell } from "@/components/layout/AppShell";

export default function ProtectedDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
