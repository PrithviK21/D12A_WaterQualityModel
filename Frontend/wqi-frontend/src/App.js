import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as Pages from "./Ipageimport.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Pages.Homepage />} />
        <Route path="prevention" element={<Pages.Prevention />} />
        <Route path="vis" element={<Pages.VisMenu />} />
        <Route path="line" element={<Pages.LineChart />} />
        {/* <Route path="bar" element={<Pages.BarChart />} /> */}
        <Route path="heatmap" element={<Pages.Heatmap />} />
        {/* <Route path="dataset" element={<Pages.Dataset />} /> */}
        <Route path="about" element={<Pages.AboutUs />} />
        <Route path="grievance" element={<Pages.Grievance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
