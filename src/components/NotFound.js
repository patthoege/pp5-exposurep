import React from "react";
import NoPage from "../assets/404-page.png";
import Asset from "./Assets";


const NotFound = () => {
    return (
        <div className="mt-5">
          <Asset
            src={NoPage}
            message={`Sorry, the page you're looking for doesn't exist`}
          />
        </div>
      );
    };

export default NotFound;