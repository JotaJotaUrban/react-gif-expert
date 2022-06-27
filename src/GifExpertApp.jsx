import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Azulejos"]);

  const onAddCategory = (newCat) => {
    if (!categories.includes(newCat)) {
      setCategories([newCat, ...categories]);
    }
  }

  return (<>

    <h1>GifExpertApp</h1>

    <AddCategory onNewCategory={onAddCategory} />

    {categories.map((item, i) => {
      return (<GifGrid key={item} category={item} />);
    })}


  </>)
}