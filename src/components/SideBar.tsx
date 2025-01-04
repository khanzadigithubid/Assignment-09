import React from "react";

interface SideBarProps {
  onCategorySelect: (category: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onCategorySelect }) => {
  const categories = [
    { name: "Home", value: "" },
    { name: "Jewelery", value: "jewelery" },
    { name: "Men's Clothing", value: "men's clothing" },
    { name: "Electronics", value: "electronics" },
    { name: "Women's Clothing", value: "women's clothing" },
  ];

  return (
    <aside className="w-[250px] h-full bg-white flex flex-col py-4 px-2 border-r border-[#ebebeb]">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategorySelect(category.value)}
          className="flex items-center py-2 px-3 border border-[#ebebeb] hover:shadow-md rounded-full bg-white mb-2 shadow-sm text-left"
        >
          <h3 className="montserrat-semibold text-sm text-black">{category.name}</h3>
        </button>
      ))}
    </aside>
  );
};

export default SideBar;
