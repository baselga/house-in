import { OrderByDirection, QueryConstraint, orderBy } from "firebase/firestore";
import { QueryParams } from "../../domain/QueryParams";

function getQueryConstraints(queryParams: QueryParams) {
  const queryConstraints: QueryConstraint[] = [];

  if (queryParams?.sort) {
    const { field, order } = queryParams.sort;

    let direction: OrderByDirection = "asc";
    if (order === "DESC") {
      direction = "desc";
    }

    queryConstraints.push(orderBy(field, direction));
  }

  return queryConstraints;
}

export default getQueryConstraints;
