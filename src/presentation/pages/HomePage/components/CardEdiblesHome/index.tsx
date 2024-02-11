import { FirebaseEdibleRepository } from "@/modules/edibles/infraestructure/FirebaseEdibleRepository";
import { RepositoryProvider } from "@/presentation/helpers/repositoryContext";
import CardEdiblesHomeView from "./View";
import { CardEdibleHomeProvider } from "./context";

const CardEdiblesHome = () => {
  return (
    <RepositoryProvider
      repository={{
        edible: FirebaseEdibleRepository,
      }}
    >
      <CardEdibleHomeProvider>
        <CardEdiblesHomeView />
      </CardEdibleHomeProvider>
    </RepositoryProvider>
  );
};

export default CardEdiblesHome;
