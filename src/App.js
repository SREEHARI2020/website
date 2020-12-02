
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Product } from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>


     <Switch>
       <Route exact path='/'><Home/></Route>
       
       <Route path='/about'><About/></Route>
       <Route path='/products/:id'> <Product/></Route>
     </Switch>
   
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
