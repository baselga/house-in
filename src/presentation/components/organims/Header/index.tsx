import { SECTIONS } from "@/presentation/config/sections";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "../../ui/navigation-menu";
import { Button } from "../../ui/button";
import useAuthContext from "@/presentation/helpers/authContext";

const Header: React.FC = () => {
  const authContext = useAuthContext();

  return (
    <header className="bg-slate-600 text-white py-2 flex justify-center mb-4">
      <div className="container flex justify-between">
        <Link to={SECTIONS.home.path}>
          <h1 className="text-3xl font-bold+">House In</h1>
        </Link>
        <NavigationMenu className="dark">
          <NavigationMenuList className="flex flex-row gap-2 items-center">
            <NavigationMenuItem>
              <Link to={SECTIONS.edible.path}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {SECTIONS.edible.label.toUpperCase()}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button onClick={authContext.logout} variant="ghost">
                Salir
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
export default Header;
