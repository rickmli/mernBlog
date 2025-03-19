import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="m-auto mt-10 max-w-md">
      <h1 className="text-center text-3xl font-bold uppercase">
        404 Page Not Found
      </h1>
      <p className="mt-10 text-lg">
        This page cannot be found, please try another time or click{" "}
        <Link to="/" className="text-teal-500 hover:underline">
          here
        </Link>{" "}
        to go back to the home page
      </p>
    </div>
  );
}

export default NotFound;
