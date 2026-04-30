import "@/styles/globals.css";
import Layout from "@/components/Layout";
import ComingSoon from "@/components/ComingSoon";
import { Baskervville, DM_Sans } from "next/font/google";

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

const showComingSoon = true;

export default function App({ Component, pageProps }) {
  return (
    <main className={`${baskervville.variable} ${dmSans.variable}`}>
      {showComingSoon ? (
        <ComingSoon />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </main>
  );
}
