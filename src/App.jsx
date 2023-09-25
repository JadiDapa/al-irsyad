import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Activity,
  History,
  Home,
  Layout,
  News,
  NewsDetail,
  NoPage,
  Profile,
  Plan,
  VissionMission,
  Finance,
  Economy,
  Donation,
  Institute,
  Tpa,
  Admin,
  AdminLayout,
  DataBerita,
  DataDonasi,
  DataFinansial,
  DataRencana,
  AddNews,
  AddPlan,
  AddFinancial,
  AddDonation,
  Majelis,
  Fakm,
} from "./pages";
import Organisasi from "./pages/Organization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/profil" element={<Profile />} />
          <Route path="/profil/sejarah" element={<History />} />
          <Route path="/profil/visi-misi" element={<VissionMission />} />

          <Route path="/kegiatan" element={<Activity />} />
          <Route path="/kegiatan/berita" element={<News />} />
          <Route path="/kegiatan/berita/:title" element={<NewsDetail />} />
          <Route path="/kegiatan/rencana" element={<Plan />} />

          <Route path="/ekonomi" element={<Economy />} />
          <Route path="/ekonomi/finansial" element={<Finance />} />
          <Route path="/ekonomi/donasi" element={<Donation />} />

          <Route path="/lembaga" element={<Institute />} />
          <Route path="/lembaga/tpa" element={<Tpa />} />
          <Route path="/lembaga/majelis" element={<Majelis />} />
          <Route path="/lembaga/fakm" element={<Fakm />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/berita" element={<DataBerita />} />
          <Route path="/admin/rencana" element={<DataRencana />} />
          <Route path="/admin/finansial" element={<DataFinansial />} />
          <Route path="/admin/donasi" element={<DataDonasi />} />
        </Route>
        <Route path="/tambah-berita" element={<AddNews />} />
        <Route path="/tambah-rencana" element={<AddPlan />} />
        <Route path="/tambah-finansial" element={<AddFinancial />} />
        <Route path="/tambah-donasi" element={<AddDonation />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
