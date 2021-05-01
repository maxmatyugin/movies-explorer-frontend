import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { register, login, checkToken, getProfile } from "../../utils/MainApi";
import "./App.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  const [submitError, setSubmitError] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  React.useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem("storedMovies"))
    isShortMovie ? setMovies(foundMovies.filter((item) => item.duration < 40)) :
    setMovies(foundMovies);
  }, [isShortMovie])

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(`Ошибка токена ${err.status}`));
    }
  }, [loggedIn]);

  function handleSearchMovies(e) {
    e.preventDefault();
    getMovies()
      .then((data) => {
        const result = data.filter(
          (item) => {
            
            return item.nameRU
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          },
          [searchValue]
        );

        localStorage.setItem("storedMovies", JSON.stringify(result));
        setMovies(JSON.parse(localStorage.getItem("storedMovies")));
      })

      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("jwt");
      Promise.all([getProfile(token)])
        .then(([res]) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка ${err.status}`));
    }
  }, [loggedIn]);

  function handleRegister(values) {
    register(values.username, values.email, values.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      });
  }

  function handleLogin(values) {
    login(values.email, values.password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      });
  }

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  }

  function handleSearchInput(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function handleCheck(e){
    e.target.checked ? setIsShortMovie(true) : setIsShortMovie(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header>
            <Navigation isLoggedIn={loggedIn} />
          </Header>
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header>
            <Navigation isLoggedIn={loggedIn} />
          </Header>
          <Movies
            movies={movies}
            onSubmit={handleSearchMovies}
            onChange={handleSearchInput}
            searchValue={searchValue}
            handleCheck={handleCheck}
          />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header>
            <Navigation isLoggedIn={loggedIn} />
          </Header>
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/signup">
          <Register onSubmit={handleRegister} submitError={submitError} />
        </Route>
        <Route path="/signin">
          <Login onSubmit={handleLogin} submitError={submitError} />
        </Route>
        <Route path="/profile">
          <Header>
            <Navigation isLoggedIn={loggedIn} />
          </Header>
          <Profile onLogout={handleLogout} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
