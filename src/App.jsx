import Anchor from "./components/anchorTag";
import Button from "./components/button";
import Header from "./components/header";
import Image from "./components/Image";
import NavBar from "./components/NavBar";
import "./style.css";
function App() {
  return (
    <>
      <div className="maindiv">
        <Header />

        <h2>1) NavBar component</h2>
        <NavBar />
        <div className="buttondiv">
          <h2> 2)Button component.</h2>
          <Button />
        </div>
        <div className="an">
          <h2> 3) This is anchor tag element </h2>
          <Anchor />
        </div>
        <Image />
      </div>
      <footer />
    </>
  );
}

export default App;
