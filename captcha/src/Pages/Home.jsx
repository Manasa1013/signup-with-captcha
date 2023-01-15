import { Link } from "react-router-dom";
import "../App.css";

export function Home() {
  return (
    <div className="wrapper">
      <h2 className="subheading">Welcome Home!</h2>
      <p>
        <Link to="/" className="link--primary">
          Go back
        </Link>
      </p>
    </div>
  );
}
