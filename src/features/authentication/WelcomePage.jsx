import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <Link to={"/login"}>login</Link>
    </div>
  );
}

export default WelcomePage;
