import { Edible } from "@/modules/edibles/domain/Edible";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import React, { createContext, useContext } from "react";
import { UseQueryResult } from "react-query";

export const CardEdibleHomeContext = createContext({});

export const CardEdibleHomeProvider = ({
  children,
  repository = ApiEdibleRepository,
}: {
  children: React.ReactNode;
  repository?: EdibleRepository;
}) => {
  const queryData = useGetEdibleQuery(
    {
      pagination: { perPage: 5 },
    },
    repository
  );

  return (
    <CardEdibleHomeContext.Provider value={queryData}>
      {children}
    </CardEdibleHomeContext.Provider>
  );
};

const useCardEdibleHomeContext = () => {
  const context = useContext<
    | UseQueryResult<
        {
          data: Edible[];
          total: number;
        },
        unknown
      >
    | Record<string, never>
  >(CardEdibleHomeContext);
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCardEdibleHomeContext;
