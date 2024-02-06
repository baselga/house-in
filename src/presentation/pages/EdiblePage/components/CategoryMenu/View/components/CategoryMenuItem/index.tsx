import { EdibleCategory } from "@/modules/edibleCategories/domain/EdibleCategory";
import { TriangleRightIcon } from "@radix-ui/react-icons";

const CategoryMenuItem = ({ item }: { item: EdibleCategory }) => {
  const active = item?.order === 2;
  const textColor = active ? "text-black" : "text-gray-400";
  
  return (
    <li
      className={`flex gap-1 items-center font-semibold ${textColor} cursor-pointer hover:text-gray-800`}
    >
      <TriangleRightIcon className="h-6 w-6" />
      <span className="text-xl uppercase">{item.name}</span>
    </li>
  );
};

export default CategoryMenuItem;
