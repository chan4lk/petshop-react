import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
