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
  Schedule,
  VissionMission,
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
          <Route path="/kegiatan/rencana" element={<Schedule />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
