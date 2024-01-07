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
  EditPlan,
  EditFinancial,
  EditDonation,
  EditNews,
} from "./pages";

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

          <Route path="/admin/tambah-berita" element={<AddNews />} />
          <Route path="/admin/tambah-rencana" element={<AddPlan />} />
          <Route path="/admin/tambah-finansial" element={<AddFinancial />} />
          <Route path="/admin/tambah-donasi" element={<AddDonation />} />

          <Route path="/admin/edit-berita/:id" element={<EditNews />} />
          <Route path="/admin/edit-rencana/:id" element={<EditPlan />} />
          <Route path="/admin/edit-finansial/:id" element={<EditFinancial />} />
          <Route path="/admin/edit-donasi/:id" element={<EditDonation />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
