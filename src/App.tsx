import { BrowserRouter } from "react-router-dom";
import AppProviders from "./AppProviders";
import AppRoutes from "./routes";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
      <CookieConsentBanner />
    </BrowserRouter>
  </AppProviders>
);

export default App;
