import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
//import Games from "./pages/Games";
import AboutPage from "./pages/aboutPage";
import NoPage from "./pages/NoPage";

import Footer from "./pages/footer";

import './index.css';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/*<Route path="games" element={<Games />} />*/}
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
