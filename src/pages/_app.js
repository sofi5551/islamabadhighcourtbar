import "@/styles/globals.css";
import Layout from "@/components/Layout";
import ComingSoon from "@/components/ComingSoon";
import { Baskervville, DM_Sans } from "next/font/google";
import { useState, createContext } from "react";
import { useRouter } from "next/router";

export const SiteContext = createContext({ setShowComingSoon: () => {} });

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baskervville",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showComingSoon, setShowComingSoon] = useState(true);
  const isAdmin = router.pathname === "/admin";

  return (
    <SiteContext.Provider value={{ setShowComingSoon }}>
      <main className={`${baskervville.variable} ${dmSans.variable}`}>
        {showComingSoon && !isAdmin ? (
          <ComingSoon />
        ) : isAdmin ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </main>
    </SiteContext.Provider>
  );
}
