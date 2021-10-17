import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Register.css";
import { registerInitiate } from "../redux/actions";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);
  const { displayName, email, password, passwordConfirm } = state;

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) return;

    dispatch(registerInitiate(email, password, displayName));
    setState({ displayName: "", email: "", password: "", passwordConfirm: "" });
  };

  return (
    <>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Registration
          </h1>
          <input
            type="text"
            name="displayName"
            className="form-control"
            id="displayName"
            placeholder="User name"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            name="email"
            className="form-control"
            id="user-email"
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
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            id="inputRePassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />

          <div className="d-grid mt-3">
            <button className="btn btn-secondary" type="submit">
              <i className="fas fa-user-plus mx-2"></i> Register
            </button>
          </div>
          <hr />
          <p className="text-center">Already have an account? </p>
          <Link to="/login">
            <div className="d-grid">
              <button className="btn btn-primary" type="submit" id="btn-signup">
                <i className="fas fa-sign-in-alt mx-2"></i>Login
              </button>
            </div>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
