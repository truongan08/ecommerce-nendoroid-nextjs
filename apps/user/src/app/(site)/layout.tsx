import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SessionProvider } from "@/provider/session-provider";
import { ToastContainer } from "react-toastify";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <Nav />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
        >
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </SessionProvider>
    </>
  );
}
