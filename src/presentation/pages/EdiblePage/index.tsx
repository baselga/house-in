import LayoutPage from "@/presentation/components/templates/LayoutPage";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import { useState } from "react";
import CardListEdibles from "./components/CardListEdibles";

const PER_PAGE = 20;

const EdiblePage = () => {
  const [page, setPage] = useState<number>(1);
  const { data: edibles, isLoading } = useGetEdibleQuery({
    pagination: {
      page,
      perPage: PER_PAGE,
    },
    sort: {
      field: "name",
      order: "ASC",
    },
  });

  return (
    <LayoutPage>
      <h1 className="text-3xl font-bold pb-6">Despensa</h1>      
        <CardListEdibles
          data={edibles?.data}
          total={edibles?.total}
          page={page}
          perPage={PER_PAGE}
          isLoading={isLoading}
          onChangePage={setPage}
        />
      )
    </LayoutPage>
  );
};

export default EdiblePage;
