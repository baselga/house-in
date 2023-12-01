import { edibleService } from "@/domain/services/Edible.service";
import { QueryType } from "@/domain/types/query";
import { useQuery } from "react-query";

const useGetEdibleQuery = (props: QueryType = {}) => {  
  const { pagination } = props
  const respEdibleQuery = useQuery(["edible", "list", pagination], () =>
    edibleService.getEdibles(props)
  );

  return respEdibleQuery;
};

export default useGetEdibleQuery;
