import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
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
import {
  getMovies,
  saveMovie,
  getSavedMovies,
  deleteMovie,
} from "../../utils/MoviesApi";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const storedMovies = JSON.parse(localStorage.getItem("storedMovies"));
  const savedMoviesInStore = JSON.parse(localStorage.getItem("savedMovies"));

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState(storedMovies);
  const [savedMovies, setSavedMovies] = React.useState(savedMoviesInStore);
  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn);
  const history = useHistory();
  const [submitError, setSubmitError] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [searchError, setSearchError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  
  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            setLoggedIn(isLoggedIn);
            setCurrentUser(res);
          } else {
            localStorage.removeItem("isLoggedIn");
            setLoggedIn(false);
          }
        })
        .catch((err) => console.log(`Ошибка токена ${err.status}`));
    }
  }, []);

  //Регистрация

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
        setIsLoading(false);
      });
  }
  // Логин
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
      });
  }
  // Логаут
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(localStorage.getItem("isLoggedIn"));
    history.push("/");
  }
  // Редактирование профиля
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
  // Обработчик поиска фильмов
  function handleSearchMovies(e) {
    e.preventDefault();
    setIsLoading(true);
    setSearchError("");
    setMovies([]);
    localStorage.removeItem("storedMovies");
    getMovies()
      .then((data) => {
        if (searchValue === "") {
          throw new Error("Нужно ввести ключевое слово");
        }
        if (!data) {
          throw new Error(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        }

        const filteredData = data.filter((item) =>
          item.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (filteredData.length === 0) {
          throw new Error("Ничего не найдено");
        }

        localStorage.setItem("storedMovies", JSON.stringify(filteredData));
        setMovies(JSON.parse(localStorage.getItem("storedMovies")));
      })

      .catch((err) => {
        console.log(err);
        setSearchError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSearchSavedMovies(e){ e.preventDefault();
    setIsLoading(true);
    setSearchError("");
    setSavedMovies(savedMoviesInStore);
    getSavedMovies()
      .then((data) => {
        if (searchValue === "") {
          throw new Error("Нужно ввести ключевое слово");
        }
        if (!data) {
          throw new Error(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        }

        const filteredData = data.filter((item) =>
          item.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (filteredData.length === 0) {
          throw new Error("Ничего не найдено");
        }

       
        setSavedMovies(filteredData);
      })

      .catch((err) => {
        console.log(err);
        setSearchError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSearchInput(e) {
    const { value } = e.target;
    setSearchValue(value);
  }
  // Лайк и сохранение фильма
  function handleSaveMovie(movie, isLiked, setIsLiked) {
    if (isLiked) {
      getSavedMovies()
        .then((res) => {
          Promise.resolve(res.find((i) => i.movieId === movie.id)).then(
            (movieId) => {
              deleteMovie(movieId._id).then(() => {
                const newMovies = savedMovies.filter(
                  (m) => m._id !== movieId._id
                );
                localStorage.setItem("savedMovies", JSON.stringify(newMovies));
                const movies = JSON.parse(localStorage.getItem("savedMovies"));
                setSavedMovies(movies);
                setIsLiked(false);
              });
            }
          );
        })

        .catch((err) => console.log(err));
    } else {
      setIsLiked(true);
      saveMovie(movie)
        .then(() => {
          getSavedMovies().then((res) => {
            localStorage.setItem("savedMovies", JSON.stringify(res));
            const movies = JSON.parse(localStorage.getItem("savedMovies"));
            setSavedMovies(movies);
            setIsLiked(true);
          });
        })
        .catch((err) => console.log(err));
    }
  }
// Обрабока короткометражек
function checkIsShortMovie(e){
  e.target.checked ? setIsShortMovie(true) : setIsShortMovie(false)
 
}

  // Удаление фильма, дизлайк
  const handleDeleteMovie = (movie) => {
    deleteMovie(movie._id)
      .then((res) => {
        const newMovies = savedMovies.filter((m) => m._id !== movie._id);
        localStorage.setItem("savedMovies", JSON.stringify(newMovies));
        const movies = JSON.parse(localStorage.getItem("savedMovies"));
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };

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
          isLoggedIn={loggedIn}
          isLoading={isLoading}
          searchError={searchError}
          onSaveMovie={handleSaveMovie}
          handleCheck={checkIsShortMovie}
          isShortMovie={isShortMovie}
        />

        <ProtectedRoute
          path="/saved-movies"
          isLoggedIn={loggedIn}
          component={SavedMovies}
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          onDeleteMovie={handleDeleteMovie}
          onChange={handleSearchInput}
          searchValue={searchValue}
          onSubmit={handleSearchSavedMovies}
          searchError={searchError}
          handleCheck={checkIsShortMovie}
          isShortMovie={isShortMovie}
        />
        <Route path="/signup">
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Register
              onSubmit={handleRegister}
              submitError={submitError}
              isLoading={isLoading}
            />
          )}
        </Route>
        <Route path="/signin">
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Login
              onSubmit={handleLogin}
              submitError={submitError}
              isLoading={isLoading}
            />
          )}
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
