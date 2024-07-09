import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <div className="flex gap-8">
          <h2 className="text-lg font-medium hover:font-bold">
            <Link>Education</Link>
          </h2>

          <h2 className="text-lg font-medium hover:font-bold">
            <Link>Education</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
