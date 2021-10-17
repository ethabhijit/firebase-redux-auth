import { auth, onAuthStateChanged } from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRoute from "./components/UserRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { setUser } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <UserRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
