// ✅ src/Components/Categories.jsx

import {
  MdFreeBreakfast,
  MdSoupKitchen,
  MdLunchDining,
  MdLocalPizza,
  MdFastfood,
} from "react-icons/md";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: null,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: MdFreeBreakfast,
  },
  {
    id: 3,
    name: "Soups",
    icon: MdSoupKitchen,
  },
  {
    id: 4,
    name: "Main Course",
    icon: MdLunchDining,
  },
  {
    id: 5,
    name: "Pizza",
    icon: MdLocalPizza,
  },
  {
    id: 6,
    name: "Burgers",
    icon: MdFastfood,
  },
];

export default Categories;
