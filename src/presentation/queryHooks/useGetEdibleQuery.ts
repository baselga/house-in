import { EdibleQueryParams } from "@/modules/edibles/application/get/getEdibles";
import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import { useQuery } from "react-query";

const useGetEdibleQuery = (
  props: EdibleQueryParams = {},
  repository: EdibleRepository = ApiEdibleRepository
) => {
  const service = EdibleService(repository);
  const { pagination, sort, filter } = props;

  const respEdibleQuery = useQuery(["edible", "list", pagination, sort, filter], () =>
    service.getEdibles(props)
  );

  return respEdibleQuery;
};

export default useGetEdibleQuery;
