import { AppProps } from "next/app";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { wrapper } from "../config/configureStore";

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
    //
    // <Provider store={store()}>
    //   <Component {...pageProps} />
    // </Provider>
  );
};

export default wrapper.withRedux(MyApp);