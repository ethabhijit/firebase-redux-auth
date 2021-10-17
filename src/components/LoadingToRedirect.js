import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const history = useHistory();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    count === 0 && history.push("/login");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="m-3 p-2">
      <p className="text-center">Redirecting you in {count}s</p>
    </div>
  );
};

export default LoadingToRedirect;
