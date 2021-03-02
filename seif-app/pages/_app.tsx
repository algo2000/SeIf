import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { Provider } from 'react-redux'
import configureStore from '../reducers/configureStore'

const store = configureStore()

const SeifApp = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

SeifApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    return {...appProps}
}

export default SeifApp