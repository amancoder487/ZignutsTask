import react from "react";
import Clients from "./Compoment/Clients";
import Footer from "./Compoment/Footer";
import Header from "./Compoment/Header";
import Services from "./Compoment/Services";
import { Team } from "./Compoment/Team";

function App() {
  return (
    <div>
      <Header/> 
      <Services/>
       <Team/> 
      <Clients/>
      <Footer/>

    </div>
  );
}

export default App;
