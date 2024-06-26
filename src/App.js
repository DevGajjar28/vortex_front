import React, { createContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import "./App.css";
import Ads from "./components/Ads";
import BackBtn from "./components/BackBtn";
import CollectionDetail from "./components/CollectionDetail";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Advertise from "./pages/Advertise";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Contribute from "./pages/Contribute";
import History from "./pages/History";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Registration from "./pages/Registration";
import "./setupTests";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Profile from "./pages/Profile";

export const ImageContext = createContext();

function App() {
  function Layout({ children }) {
    return (
      <div className="App">
        <Navbar />

        {/* <Footer /> */}
        <div>{children}</div>
      </div>
    );
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <BackBtn />

        <Switch>
          <Route path="/" exact render={() => <Premium />} />
          <Route
            path="/Home"
            exact
            render={() => (
              <Layout>
                <Home />
              </Layout>
            )}
          />
          <Route
            path="/Inspiration"
            render={() => (
              <Layout>
                <Inspiration />
              </Layout>
            )}
          />
          <Route
            path="/Advertise"
            render={() => (
              <Layout>
                <Advertise />
              </Layout>
            )}
          />
          {/* <Route path="/Premium" component={Premium} /> */}
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Ads" component={Ads} />
          <Route path="/History" component={History} />
          <Route path="/About" component={About} />
          <Route
            path="/Contribute"
            render={() => (
              <Layout>
                <Contribute />
              </Layout>
            )}
          />
          <Route
            path="/Collection"
            render={() => (
              <Layout>
                <Collection />
              </Layout>
            )}
          />
          <Route
            path="/Collection/:collectionId"
            component={CollectionDetail}
          />
          <Route path="/UserProfile" render={() => <Profile />} />
          {/* <Route path="/PrivacyPolicy" component={PrivacyPolicy} /> */}

          {/* <Route path="/UserChange" render={() => <Layout><UserChange /></Layout>} /> */}
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
