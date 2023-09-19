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
} from "./pages";
import Institute from "./pages/Institute";
import Tpa from "./pages/Tpa";

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
          <Route path="/lembaga/donasi" element={<Donation />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
