import { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    // if it is darkmode, make background soft black. Else make white
    <div 
    style={{ 
      backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white",
      }}
    >
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;