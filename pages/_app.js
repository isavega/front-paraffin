import React from "react";
import Layout from "../components/Layout/Layout";
import ContextGuard from "../components/Guard/ContextGuard";
import "../styles/globals.css";
import { MyUserContext } from "../context/context";

function App({ Component, pageProps }) {
  return (
    <MyUserContext>
      <ContextGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextGuard>
    </MyUserContext>
  );
}

export default App;
