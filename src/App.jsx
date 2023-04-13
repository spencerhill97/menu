import React, { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterArray = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} filterArray={filterArray} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
