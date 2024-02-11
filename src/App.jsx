import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DisplayRocket from "./components/DisplayRocket";
import Mission from "./components/Mission";
import MyProfile from "./components/MyProfile";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DisplayRocket />} />
          <Route path="mission" element={<Mission />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
