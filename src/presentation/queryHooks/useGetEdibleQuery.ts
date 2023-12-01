import { edibleService } from "@/domain/entities/Edible/Edible.service";
import { queryType } from "@/domain/types/query";
import { useQuery } from "react-query";

const useGetEdibleQuery = (props: queryType = {}) => {  
  const { pagination } = props
  const respEdibleQuery = useQuery(["edible", "list", pagination], () =>
    edibleService.getEdibles(props)
  );

  return respEdibleQuery;
};

export default useGetEdibleQuery;
