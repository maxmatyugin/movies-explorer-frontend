import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Popup from "../Popup/Popup";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header>
          <Navigation isLoggedIn={false}/>
        </Header>
        <Main />
        <Footer />
      </Route>
      <Route path="/movies">
        <Header>
          <Navigation isLoggedIn={true} />
        </Header>
        <Movies />
        <Footer />
      </Route>
      <Route path="/saved-movies">
        <Header>
          <Navigation isLoggedIn={true} />
        </Header>
        <SavedMovies />
        <Footer />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/profile">
        <Header>
          <Navigation isLoggedIn={true}/>
        </Header>
        <Profile />
        
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
