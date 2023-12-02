import { edibleQueryType, edibleService } from "@/domain/entities/Edible/Edible.service";
import { useQuery } from "react-query";

const useGetEdibleQuery = (props: edibleQueryType = {}) => {  
  const { pagination, sort } = props

  const respEdibleQuery = useQuery(["edible", "list", pagination, sort], () =>
    edibleService.getEdibles(props)
  );

  return respEdibleQuery;
};

export default useGetEdibleQuery;
