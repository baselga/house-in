import { Edible } from "@/modules/edibles/domain/Edible";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";
import React, { createContext, useContext } from "react";
import { UseQueryResult } from "react-query";

export const CardEdibleHomeContext = createContext({});

export const CardEdibleHomeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryData = useGetEdibleQuery({
    pagination: { perPage: 5 },
  });

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

export default useCardEdibleHomeContext;
