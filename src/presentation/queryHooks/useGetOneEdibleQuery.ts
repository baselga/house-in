import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleId } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import { useQuery } from "react-query";

const useGetOneEdibleQuery = (
  id: EdibleId | false,
  repository: EdibleRepository = ApiEdibleRepository
) => {
  const service = EdibleService(repository);

  const respEdibleQuery = useQuery(["edible", "one", id], () =>
    service.getOneEdible(id || ""),
    {
      enabled: !!id
    }
  );

  return respEdibleQuery;
};

export default useGetOneEdibleQuery;
