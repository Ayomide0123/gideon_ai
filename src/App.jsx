import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      {/* <div className="gradient" /> */}
      <div className="gradient">
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  );
};

export default App;
