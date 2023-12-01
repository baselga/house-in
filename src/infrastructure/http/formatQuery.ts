export type QueryParams = {
  pagination?: {
    page: number;
    perPage: number;
  };
};

function formatQueryParams(props?: QueryParams) {
  const queryParams = [];
  if (props?.pagination) {
    const pagination = props?.pagination;

    queryParams.push(`_page=${pagination.page}`);
    queryParams.push(`_limit=${pagination.perPage}`);
  }

  return queryParams.join("&");
}

export default formatQueryParams;
