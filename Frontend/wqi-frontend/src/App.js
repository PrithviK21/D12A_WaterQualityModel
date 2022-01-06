import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import VisMenu from "./pages/VisMenu";
import Heatmap from "./pages/Heatmap";
import Prevention from "./pages/Prevention";
import LineChart from "./pages/LineChart";
import BarChart from "./pages/BarChart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <VisMenu /> */}
      {/* <Heatmap /> */}
      {/* <LineChart /> */}
      {/* <BarChart /> */}
      {/* <Prevention /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="prevention" element={<Prevention />} />
        <Route path="vis" element={<VisMenu />} />
        <Route path="line" element={<LineChart />} />
        <Route path="bar" element={<BarChart />} />
        <Route path="heatmap" element={<Heatmap />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
