import {
  Card,
  CardContent,
  CardHeader,
} from "@/presentation/components/ui/card";
import useCategoryMenuContext from "../context";
import CategoryMenuItem from "./components/CategoryMenuItem";
import EditMenu from "./components/EditMenu";

const CategoryMenuView = () => {
  const { menuItems } = useCategoryMenuContext();

  return (
    <Card className="min-w-[250px] mb-6">
      <CardHeader className="py-2 px-2 flex flex-row items-center">
        <h3 className="font-medium flex-1 pl-2">Categorias</h3>
        <EditMenu />
      </CardHeader>
      <CardContent className="px-2 pb-2">
        <ul className="[&>li]:mt-1">
          {menuItems?.data?.data.map((item) => (
            <CategoryMenuItem item={item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CategoryMenuView;
