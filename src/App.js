import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <div className="App">

        
           
             <Navbar></Navbar>
             <Switch>
             <Route path="/" exact component={Home}></Route>
              <Route path="/gallery"  component={Gallery}></Route> 
              <Route path="/about"  component={About}></Route> 
              <Route path="/contact"  component={Contact}></Route> 
           </Switch>
          
           

            
    </div>
    </BrowserRouter>
  );
}

export default App;
