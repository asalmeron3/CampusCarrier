import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//------Pages to render ---------//
import UploadPage from "./pages/UploadEmployees/UploadEmployee"
import Reports from "./pages/Reports/Reports"

// -----------------------------//

// ---Components for all pages ---//
  import Navbar from "./components/Navbar/Navbar";
  // import Footer from "./components/Footer/Footer"; 
  // import ContactUsModal from "./components/ContactUs"
  // import MapModal from "./components/MapModal"
// -----------------------------//

class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <Navbar/>

            <Switch>
              <Route exact path = "/" component = {UploadPage} />
              <Route exact path = "/reports" component = {Reports} />
            </Switch>

            </div>
      </Router>
    )
  }
}


export default App;
