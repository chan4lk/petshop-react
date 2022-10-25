import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import PetContainer from "./components/Container";
import pets from './data';
function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <h1 style={{ textAlign: "center" }}>PetShop</h1>
          <PetContainer pets={pets} />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
