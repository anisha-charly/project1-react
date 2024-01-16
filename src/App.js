import logo from "./logo.svg";
import "./App.css";
import Imagecarousel from "./Components/Imagecarousel";
function App() {
  return (
    <div>
      <Header />
      <Imagecarousel />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header>
      <h1>BRAND MALL</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <h1>CLOSED</h1>
    </footer>
  );
}

export default App;
