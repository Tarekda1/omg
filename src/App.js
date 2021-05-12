import { SWRConfig } from "swr";
import "./App.css";
import Slider from "./Components/Slider";

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div className="App">
        <header className="App-header">Super Heros</header>
        <Slider />
      </div>
    </SWRConfig>
  );
}

export default App;
