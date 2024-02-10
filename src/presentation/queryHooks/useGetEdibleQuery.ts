import { EdibleQueryParams } from "@/modules/edibles/application/get/getEdibles";
import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { useQuery } from "react-query";
import useRepositoryContext from "../helpers/repositoryContext";

const useGetEdibleQuery = (props: EdibleQueryParams = {}) => {
  const repository = useRepositoryContext<EdibleRepository>("edible");
  const service = EdibleService(repository);
  const { pagination, sort, filter } = props;

  const respEdibleQuery = useQuery(
    ["edible", "list", pagination, sort, filter],
    () => service.getEdibles(props),
  );

  return respEdibleQuery;
};

export default useGetEdibleQuery;
