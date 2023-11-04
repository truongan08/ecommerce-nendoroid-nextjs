import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SessionProvider } from "@/provider/session-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <Nav />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
}
