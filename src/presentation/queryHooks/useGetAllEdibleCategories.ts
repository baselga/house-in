import { EdibleCategoryService } from "@/modules/edibleCategories/application/service/EdibleCategoryService";
import { EdibleCategoryRepository } from "@/modules/edibleCategories/domain/EdibleCategoryRepository";
import { ApiEdibleCategoryRepository } from "@/modules/edibleCategories/infraestructure/ApiEdibleCategoryRepository";
import { useQuery } from "react-query";

const useGetAllEdibleCategories = (
  repository: EdibleCategoryRepository = ApiEdibleCategoryRepository
) => {
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
