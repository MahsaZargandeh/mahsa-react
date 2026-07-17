import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <AppRoutes />

      <Footer />

      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
