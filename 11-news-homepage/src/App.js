import './App.css';

import Header from "./components/header/Header.js";
import Section1 from "./components/section1/Section1.js";
import Section2 from "./components/section2/Section2.js";
import Section3 from "./components/section3/Section3.js";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="s1">
        <Section1 id="Section1" />
        <Section2 id="Section2" />
      </div>
      <Section3/>
    </div>
  );
}

export default App;
