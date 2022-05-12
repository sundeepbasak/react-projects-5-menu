import React from "react";

const MenuItem = ({ menu }) => {
  return (
    <div className="my-8 grid lg:grid-cols-2 gap-4">
      {menu.map((curElem) => {
          return (
          <article key={curElem.id} className="bg-white rounded-md shadow-md overflow-hidden max-w-md mx-auto md:max-w-2xl">
            <div className="md:flex">
              <div className="img-container h-48 w-full md:w-64 lg:h-60 xl:h-48 rounded-t-md md:rounded-t-none md:rounded-l-md border-4 border-yellow-500">
                <img
                  className="h-full w-full object-cover rounded-t md:rounded-none md:rounded-l-sm"
                  src={curElem.image}
                  alt={curElem.dish}
                />
              </div>
              <div className=" text-field p-4 md:w-2/3">
                <div className="flex justify-between items-center">
                  <h3 className="uppercase tracking-wide text-base font-bold">
                    {curElem.dish}
                  </h3>
                  <h3 className="block text-lg leading-tight font-medium text-yellow-500 ">
                    {curElem.price}
                  </h3>
                </div>
                <div className="mt-2 h-px bg-yellow-500"></div>
                <p className="mt-2 text-slate-500">{curElem.description}</p>
              </div>
            </div>
          </article>
          );
      })}
    </div>
  );
};

export default MenuItem;

