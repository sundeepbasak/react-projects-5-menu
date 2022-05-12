import React, { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import menu from './components/api';
import MenuItem from "./components/MenuItem";
import Categories from "./components/Categories";

const projectName = "Daily Menu";

// const allCategories = menu.map((item) => item.category);
// console.log(allCategories); //-->gives repeating categories

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(allCategories); //-->gives all category + unique categories

const App = () => {
  const [menuData, setMenuData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (curCategory) => {
    if(curCategory === 'all'){
      return setMenuData(menu);
    }
    const newMenu = menu.filter((item) => item.category === curCategory );
    setMenuData(newMenu);
  }

  return (
    <div className="bg-slate-900 min-h-screen w-screen h-auto flex">
      <main className="container w-4/5 max-w-6xl mx-auto flex flex-col justify-center items-center">
        <Header projectName={projectName} />
        <Categories categories={categories} filterItems={filterMenu}/>
        <MenuItem menu={menuData}/>
        <Footer />
      </main>
    </div>
  );
};

export default App;

