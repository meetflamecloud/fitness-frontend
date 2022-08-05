import "./App.css";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Faq from "./Components/Faq";
import Membership from "./Components/Membership";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

function App() {
  return (
    <div className="App">
      <div className="text-center my-5">Landingpage(Sidebar Work's Here)</div>
      <Page1></Page1>

      <Page2></Page2>
      <div className="text-center my-5">Faq</div>
      <Faq></Faq>
      <div className="text-center my-5">Aboutus</div>
      <Aboutus></Aboutus>
      <div className="text-center my-5">Membership</div>
      <Membership></Membership>
      <div className="text-center my-5">Contactus</div>
      <Contactus></Contactus>
    </div>
  );
}

export default App;
