import Footer from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/Header";
import { modals } from "@/packages/modals";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAdmin = router.pathname.includes("/admin");
  const isAdminAuth = router.pathname.includes("/admin/auth");

  if (isAdminAuth) return children

  if (isAdmin) {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">Admin Console</h1>
        </header>
        <div className="flex flex-1">
          <nav className="flex flex-col justify-between bg-gray-200 w-1/4 p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/admin/categories">Categories</Link>
              </li>
              <li>
                <Link href="/admin/listings">Listings</Link>
              </li>
            </ul>

            <Button
              variant="secondary"
              onClick={() => {
                modals.open({
                  id: "sign-out",
                  title: "Sign Out",
                  subTitle: "Are you sure you want to sign out?",
                  primaryButtonAction: () => {
                    signOut();
                  },
                  closeOnPrimaryButtonClick: false,
                  showSecondaryButton: true,
                  buttonsOrientation: "vertical"
                });
              }}
            >
              Sign Out
            </Button>
          </nav>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
}
