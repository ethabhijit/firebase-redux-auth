import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import {
  loginInitiate,
  googleSignInitiate,
  facebookSignInitiate,
} from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const handleGoogleSignIn = () => {
    dispatch(googleSignInitiate());
  };
  const handleFacebookSignIn = () => {
    dispatch(facebookSignInitiate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(loginInitiate(email, password));
    setState({ ...state, email: "", password: "" });
  };

  return (
    <>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g mx-2"></i>
                Login with google
              </span>
            </button>

            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFacebookSignIn}
            >
              <span>
                <i className="fab fa-facebook-f mx-2"></i>
                Login with facebook
              </span>
            </button>
          </div>
          <p className="text-center">OR</p>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email Addres"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />

          <div className="d-grid mt-3">
            <button className="btn btn-secondary" type="submit">
              <i className="fas fa-sign-in-alt mx-2"></i> Login
            </button>
          </div>
          <hr />
          <p className="text-center">Don't have a account? </p>
          <Link to="/register">
            <div className="d-grid">
              <button className="btn btn-primary" type="submit" id="btn-signup">
                <i className="fas fa-user-plus mx-2"></i>Create new account!
              </button>
            </div>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
