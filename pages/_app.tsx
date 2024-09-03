import { Bricolage_Grotesque } from "@next/font/google";

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={bricolage_grotesque.className} style={{ fontWeight: 200 }}>
      <Component {...pageProps} />
    </main>
  );
}
