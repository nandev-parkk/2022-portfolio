import global from "styles/global";
import Layout from "components/Layout";
import { Global } from "@emotion/react";
import { store } from "modules/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Global styles={global} />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

const persistor = persistStore(store);
