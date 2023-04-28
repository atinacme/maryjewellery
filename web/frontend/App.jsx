import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import { Provider } from "react-redux";
import store from "./components/Redux/store";
import "../resources/css/app.css";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <Provider store={store}>
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <QueryProvider>
              <NavigationMenu
                navigationLinks={[
                  {
                    destination: "/HomePage",
                  },
                  {
                    destination: "/ManufacturerHomePage",
                  },
                  {
                    destination: "/NewTaskHomePage",
                  },
                  {
                    destination: "/AddSpecialOrderPage",
                  }
                ]}
              />
              <Routes pages={pages} />
            </QueryProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    </Provider>
  );
}
