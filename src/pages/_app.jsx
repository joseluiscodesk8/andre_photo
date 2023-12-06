import "@/styles/globals.css";
import Layout from "./container/Layout";
import { MenuProvider } from "@/context/MenuContext";

export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}
