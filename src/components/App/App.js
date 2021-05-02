import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  register,
  login,
  checkToken,
  updateProfile,
} from "../../utils/MainApi";
import "./App.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn);
  const history = useHistory();
  const [submitError, setSubmitError] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem("storedMovies"));
    isShortMovie
      ? setMovies(foundMovies.filter((item) => item.duration < 40))
      : setMovies(foundMovies);
  }, [isShortMovie]);

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            setLoggedIn(isLoggedIn);
            setCurrentUser(res);
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

  function handleRegister(values) {
    setIsLoading(true);
    register(values.username, values.email, values.password)
      .then(() => {
        handleLogin(values);
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleLogin(values) {
    setIsLoading(true);
    login(values.email, values.password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          localStorage.setItem("isLoggedIn", true);
          setLoggedIn(localStorage.getItem("isLoggedIn"));
          
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      })
      .finally(() => {
        setIsLoading(false);
        history.push("/movies");
      })
  }

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(localStorage.getItem("isLoggedIn"));
    history.push("/");
  }

  function handleEditProfile(values) {
    console.log(values);
    updateProfile(values.username, values.email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      });
  }

  function handleSearchInput(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function handleCheck(e) {
    e.target.checked ? setIsShortMovie(true) : setIsShortMovie(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          movies={movies}
          onSubmit={handleSearchMovies}
          onChange={handleSearchInput}
          searchValue={searchValue}
          handleCheck={handleCheck}
          isLoggedIn={loggedIn}
        />

        <ProtectedRoute
          path="/saved-movies"
          isLoggedIn={loggedIn}
          component={SavedMovies}
          loggedIn={loggedIn}
        />
        <Route path="/signup">
          <Register onSubmit={handleRegister} submitError={submitError} isLoading={isLoading}/>
        </Route>
        <Route path="/signin">
          <Login onSubmit={handleLogin} submitError={submitError} isLoading={isLoading}/>
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onLogout={handleLogout}
          loggedIn={loggedIn}
          isLoggedIn={loggedIn}
          onSubmit={handleEditProfile}
          submitError={submitError}
        />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
