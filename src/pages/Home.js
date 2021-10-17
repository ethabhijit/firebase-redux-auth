import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <div className="d-flex flex-column align-items-center m-4">
      <h2>Welcome to our website!</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
