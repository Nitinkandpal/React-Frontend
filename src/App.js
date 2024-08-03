//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
//import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import MissionSection from './components/MissionSection.js';
import OfferSection from './components/OfferSection.js'
import ImageGrid from './components/ImageGrid.js'




function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <ImageGrid/>
        <MissionSection/>
        <OfferSection/>
        
        {/* <Switch>
          <Route exact path="/">
         
          </Route>
        
        </Switch> */}
        <Footer />
      </div>
    </Router>
    
    </>
    
  );
}

export default App;
