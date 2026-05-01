import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TweaksPanel from "./components/TweaksPanel/TweaksPanel";
import RwaPage from "./pages/RwaPage";
import StablecoinsPage from "./pages/StablecoinsPage";

function Layout() {
  return (
    <>
      <Navbar />
      <main id="page">
        <Outlet />
        <Footer />
      </main>
      <TweaksPanel />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<RwaPage />} />
          <Route path="/stablecoins" element={<StablecoinsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
