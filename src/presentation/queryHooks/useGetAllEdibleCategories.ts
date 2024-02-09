import { EdibleCategoryService } from "@/modules/edibleCategories/application/service/EdibleCategoryService";
import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import { useQuery } from "react-query";
import useRepositoryContext from "../helpers/repositoryContext";

const useGetAllEdibleCategories = () => {
  const repository = useRepositoryContext<EdibleCategoryRepository>("edibleCategory")
  const service = EdibleCategoryService(repository);

  const respEdibleCategoriesQuery = useQuery(["edible-menu"], () =>
    service.getList({
      sort: {
        field: "order",
        order: "ASC",
      },
    })
  );
  return respEdibleCategoriesQuery;
};

export default useGetAllEdibleCategories;
