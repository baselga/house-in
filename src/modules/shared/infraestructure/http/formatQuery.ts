import { QueryParams } from "../../domain/QueryParams";

function formatQueryParams(props?: QueryParams) {
  const queryParams = [];
  if (props?.pagination) {
    const pagination = props.pagination;

    queryParams.push(`_page=${pagination.page}`);
    queryParams.push(`_limit=${pagination.perPage}`);
  }

  if (props?.sort) {
    const sort = props.sort;

    queryParams.push(`_sort=${sort.field}`);
    queryParams.push(`_order=${sort.order.toLocaleLowerCase()}`);
  }

  if (props?.filter) {
    for (const key in props.filter) {
      if (Object.prototype.hasOwnProperty.call(props.filter, key)) {
        queryParams.push(`${key}=${props.filter[key]}`);
      }
    }
  }

  return queryParams.join("&");
}

export default formatQueryParams;
