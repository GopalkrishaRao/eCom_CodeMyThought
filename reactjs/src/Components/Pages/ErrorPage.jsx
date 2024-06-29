import React from 'react';
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
          <h2>404</h2>
          <h3>Page Not Found !!!!</h3>
          <p>
            The page you are looking for does not exist. Click the button below to go back to the homepage.
          </p>

          <NavLink to="/">
            {/* <Button>Go Back to Home</Button> */}
            <button>Go Back to Home</button>
          </NavLink>
        </div>
  )
}
