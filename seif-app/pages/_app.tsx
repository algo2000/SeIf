import { AppProps } from "next/app";
import React from "react";
import { wrapper } from "../config/configureStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
    //
    // <Provider store={store()}>
    //   <Component {...pageProps} />
    // </Provider>
  );
};

export default wrapper.withRedux(MyApp);