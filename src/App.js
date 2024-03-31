import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch,useLocation } from 'react-router-dom';

import './App.css';
import Navbar from "./components/Navbar";
import Advertise from "./pages/Advertise";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Ads from "./components/Ads";
import History from "./pages/History";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Collection from "./pages/Collection";
import CollectionDetail from "./components/CollectionDetail";
import UserProfile from "./components/UserProfile";
import BackBtn from "./components/BackBtn";




export const ImageContext = createContext();

function App() {
  function Layout({ children }) {
    return (
      <div className="App">
        <Navbar />
        
        {/* <Footer /> */}
        <div>
          {children}
        </div>
      </div>
    );
  }

  function CurrentPath() {
    const location = useLocation();
    return <div>Current Path: {location.pathname}</div>;
  }

  return (
    
    <Router>
    <BackBtn/>

      <Switch>
        <Route path="/" exact render={() => <Layout><Home /></Layout>} />
        <Route path="/Inspiration" render={() => <Layout><Inspiration /></Layout>} />
        <Route path="/Advertise" render={() => <Layout><Advertise /></Layout>} />
        <Route path="/Premium" component={Premium} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Ads" component={Ads} />
        <Route path="/History" component={History} />
        <Route path="/About" component={About} />
        <Route path="/Contribute" render={() => <Layout><Contribute /></Layout>} />
        <Route path="/Collection" render={() => <Layout><Collection /></Layout>} />
        <Route path="/Collection/:collectionId" component={CollectionDetail} />
        <Route path="/UserProfile" render={() => <UserProfile />} />
        {/* <Route path="/UserChange" render={() => <Layout><UserChange /></Layout>} /> */}
      </Switch>


    </Router>
  );
}

export default App;
