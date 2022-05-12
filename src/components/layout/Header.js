import React from "react";

const Header = ({ projectName }) => {
  return (
    <div className="text-yellow-500 text-4xl font-bold my-6">
      {projectName ? projectName : "Project Name"}
      <div className="border-b-4 border-white mt-2 w-20 mx-auto "></div>
    </div>
  );
};

export default Header;
