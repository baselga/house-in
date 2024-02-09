import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import CardEdiblesHomeView from "./View";
import { CardEdibleHomeProvider } from "./context";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";

const CardEdiblesHome = () => {
  return (
    <RepositoryProvider
      repository={{
        edible: ApiEdibleRepository,
      }}
    >
      <CardEdibleHomeProvider>
        <CardEdiblesHomeView />
      </CardEdibleHomeProvider>
    </RepositoryProvider>
  );
};

export default CardEdiblesHome;
