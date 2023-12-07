import CardEdiblesHomeView from "./View";
import { CardEdibleHomeProvider } from "./context";

const CardEdiblesHome = () => {
  return (
    <CardEdibleHomeProvider>
      <CardEdiblesHomeView />
    </CardEdibleHomeProvider>
  );
};

export default CardEdiblesHome
;
