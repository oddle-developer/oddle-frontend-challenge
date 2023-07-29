import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from 'app/store'
import { Provider } from 'react-redux'
import Layout from '../layouts'
import { persistStore } from 'redux-persist'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
