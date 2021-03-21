import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store, { wrapper } from "../config/configureStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store()}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);;