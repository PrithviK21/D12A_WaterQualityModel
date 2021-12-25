import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import VisMenu from "./pages/VisMenu";
import Heatmap from "./pages/Heatmap";
import Prevention from "./pages/Prevention";
import LineChart from "./pages/LineChart";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Homepage /> */}
      {/* <VisMenu /> */}
      {/* <Heatmap /> */}
      <LineChart />
      {/* <Prevention /> */}
      <Footer />
    </div>
  );
}

export default App;
