import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleId } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { useQuery } from "react-query";
import useRepositoryContext from "../helpers/repositoryContext";

const useGetOneEdibleQuery = (id: EdibleId | false) => {
  const repository = useRepositoryContext<EdibleRepository>("edible");
  const service = EdibleService(repository);

  const respEdibleQuery = useQuery(
    ["edible", "one", id],
    () => service.getOneEdible(id || ""),
    {
      enabled: !!id,
    }
  );

  return respEdibleQuery;
};

export default useGetOneEdibleQuery;
