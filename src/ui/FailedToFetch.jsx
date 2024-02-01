import { Link } from "react-router-dom";

function FailedToFetch() {
  return (
    <div className=" mt-10 gap-4 flex items-center justify-center flex-col">
      <span className="text-6xl">😞</span>
      <h2 className=" text-2xl">Oops, Something went very wrong!</h2>
      <p className=" text-center">Refresh the page or return to homepage</p>
      <Link to={"/"}>
        <button className="btn btn-primary">Homepage</button>
      </Link>
    </div>
  );
}

export default FailedToFetch;
