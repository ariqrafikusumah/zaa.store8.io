import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import NavbarTop from "./components/NavbarTop";
import FooterBot from "./components/FooterBot";
import NotFound from "./pages/NotFound";
import Dashboard from "./admin/Dashboard";
import FreeFire from "./admin/Freefire";
import Mobilelegend1 from "./admin/Mobilelegend1";
import Mobilelegend2 from "./admin/Mobilelegend2";
import Mobilelegend3 from "./admin/Mobilelegend3";
import Mobilelegend4 from "./admin/Mobilelegend4";
import Mobilelegend5 from "./admin/Mobilelegend5";
import Mobilelegend6 from "./admin/Mobilelegend6";
import Mobilelegend7 from "./admin/Mobilelegend7";
import Mobilelegend8 from "./admin/Mobilelegend8";
import Mobilelegend9 from "./admin/Mobilelegend9";
import MobileLegend_1 from "./pages/order/Mobilelegend_1";
import MobileLegend_2 from "./pages/order/Mobilelegend_2";
import MobileLegend_3 from "./pages/order/Mobilelegend_3";
import MobileLegend_4 from "./pages/order/Mobilelegend_4";
import MobileLegend_5 from "./pages/order/Mobilelegend_5";
import MobileLegend_6 from "./pages/order/Mobilelegend_6";
import MobileLegend_7 from "./pages/order/Mobilelegend_7";
import MobileLegend_8 from "./pages/order/Mobilelegend_8";
import MobileLegend_9 from "./pages/order/Mobilelegend_9";
import Category from "./admin/Category";
import Login from "./admin/Login";
import Freefire from "./pages/order/Freefire";
import TermsAndCondition from "./pages/TermAndCondition";
import Tentang from "./pages/Tentang";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Qris from "./admin/Qris";
import 'react-bootstrap';
import Bank from "./admin/Bank";
import Ewallet from "./admin/Ewallet";
import Genshinimpact from "./admin/Genshinimpact";
import GenshinImpact from "./pages/order/Genshinimpact";
import BannerSetting from "./admin/BannerSetting";
import PopUp from "./admin/PopUp";
import Daftalayanan from "./pages/Daftalayanan";
import WhatsappSetting from "./admin/WhatsappSetting";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Terms" element={<TermsAndCondition />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/daftar-layanan" element={<Daftalayanan />} />
        <Route path="/admin/whatsapp-setting" element={<WhatsappSetting />} />
        <Route path="/Tentang" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/banner-setting" element={<BannerSetting />} />
        <Route path="/admin/pop-up" element={<PopUp />} />
        <Route path="/admin/qris" element={<Qris />} />
        <Route path="/admin/bank" element={<Bank />} />
        <Route path="/admin/e-wallet" element={<Ewallet />} />
        <Route path="/order/free-fire" element={<Freefire />} />
        <Route path="/admin/free-fire" element={<FreeFire/>} />
        <Route path="/admin/genshin-impact" element={<Genshinimpact/>} />
        <Route path="/order/genshin-impact" element={<GenshinImpact/>} />
        <Route path="/admin/dashboard-admin" element={<Dashboard />} />
        <Route path="/admin/category-game" element={<Category />} />
        <Route path="/admin/mobile-legend-1" element={<Mobilelegend1 />} />
        <Route path="/admin/mobile-legend-2" element={<Mobilelegend2 />} />
        <Route path="/admin/mobile-legend-3" element={<Mobilelegend3 />} />
        <Route path="/admin/mobile-legend-4" element={<Mobilelegend4 />} />
        <Route path="/admin/mobile-legend-5" element={<Mobilelegend5 />} />
        <Route path="/admin/mobile-legend-6" element={<Mobilelegend6 />} />
        <Route path="/admin/mobile-legend-7" element={<Mobilelegend7 />} />
        <Route path="/admin/mobile-legend-8" element={<Mobilelegend8 />} />
        <Route path="/admin/mobile-legend-9" element={<Mobilelegend9 />} />
        <Route path="/order/mobile-legend-1" element={<MobileLegend_1 />} />
        <Route path="/order/mobile-legend-2" element={<MobileLegend_2 />} />
        <Route path="/order/mobile-legend-3" element={<MobileLegend_3 />} />
        <Route path="/order/mobile-legend-4" element={<MobileLegend_4 />} />
        <Route path="/order/mobile-legend-5" element={<MobileLegend_5 />} />
        <Route path="/order/mobile-legend-6" element={<MobileLegend_6 />} />
        <Route path="/order/mobile-legend-7" element={<MobileLegend_7 />} />
        <Route path="/order/mobile-legend-8" element={<MobileLegend_8 />} />
        <Route path="/order/mobile-legend-9" element={<MobileLegend_9 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterBot />
    </Router>
  );
}

export default App;
