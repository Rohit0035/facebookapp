"use client";

import { usePathname } from "next/navigation";
import AOSWrapper from "../components/AOSWrapper";
// import MainNavbar from "../components/MainNavbar";
// import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/signin" || pathname === "/signup" || pathname === "/forgotpassword";

  return (
    <>
      {/* {!hideLayout && <MainNavbar />} */}
      <AOSWrapper>
        <main>{children}</main>
      </AOSWrapper>
      {/* {!hideLayout && <Footer />} */}
    </>
  );
}
