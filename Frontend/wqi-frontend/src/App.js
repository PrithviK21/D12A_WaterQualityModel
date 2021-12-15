import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import VisMenu from "./pages/VisMenu";
function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      {/* <VisMenu /> */}
      <Footer />
    </div>
  );
}

export default App;
