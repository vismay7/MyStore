import React, { useEffect, useState } from "react";
import { CategoriesInterface } from "../interface/Categories";
import { getCategories } from "../Services/Produts";

const Categories = () => {
  const [categories, setCategories] = useState<CategoriesInterface | null>(null);

  useEffect(() => {
    const getCat = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getCat();
  }, []);

  return <>{console.log(categories?.categories.map((e) => console.log(e)))}</>;
};

export default Categories;
