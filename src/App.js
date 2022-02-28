import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Memes from "./pages/Memes";
import { fetchUserData } from "./redux/userReducer/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isUser = localStorage.getItem("userLoged");
    if (isUser != null) {
      console.log(JSON.parse(isUser));
      dispatch(fetchUserData(JSON.parse(isUser)));
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/memes" component={Memes} />
    </Switch>
  );
}

export default App;
