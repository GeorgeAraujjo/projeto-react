import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <main>
      <Header/>
      <Menu/>
        <Body/>
        <Footer/>
      </main>
        
    </>
  );
}

export default App;