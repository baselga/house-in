import LayoutPage from "@/presentation/components/templates/LayoutPage";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import { useState } from "react";
import CardListEdibles from "./components/CardListEdibles";
import CardAddEdible from "./components/CardAddEdible";

const PER_PAGE = 20;

const EdiblePage = () => {
  const [page, setPage] = useState<number>(1);
  const { data: edibles, isLoading, refetch } = useGetEdibleQuery({
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
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Despensa</h1>
        <CardAddEdible onSuccess={refetch} />
        <CardListEdibles
          data={edibles?.data}
          total={edibles?.total}
          page={page}
          perPage={PER_PAGE}
          isLoading={isLoading}
          onChangePage={setPage}
        />
      </div>
    </LayoutPage>
  );
};

export default EdiblePage;
