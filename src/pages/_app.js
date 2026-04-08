import "@/styles/globals.css";
import Layout from "@/components/Layout";
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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${baskervville.variable} ${dmSans.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
