import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase.js";


function App() {

 const [{ user }, dispatch] = useStateValue();
 // useEffect
 // listener
 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if (authUser) {
       // the user is logged in
       dispatch({
         type: "SET_USER",
         user: authUser,
       });
     } else {
       // the user is logged out
       dispatch({
         type: "SET_USER",
         user: null,
       });
     }
   });
   // cleanup
   return () => {
     unsubscribe();
   };
 }, []);

 console.log("USER is >>>>>>: ", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
