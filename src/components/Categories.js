import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="my-2">
      {categories.map((curCategory, index) => {
        return (
          <button
            key={index}
            type="button"
            className="mx-2 mt-2 px-4 py-2 border-2  border-yellow-500 text-yellow-500 hover:bg-yellow-500
            hover:text-black hover:font-medium rounded-md shadow-md capitalize"
            onClick={() => filterItems(curCategory)}
          >
            {curCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

/*
<button className="p-2 bg-yellow-400 mr-2" 
onClick={() => filterItems("breakfast")}> Breakfast </button>  
*/
