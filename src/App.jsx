import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, NoPage, Schedule } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Home />
                <Schedule />
              </>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
