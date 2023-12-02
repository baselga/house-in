import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useCallback, useMemo } from "react";
import SelectInput from "../../atoms/SelectInput";
import { Button } from "../../ui/button";

type PaginationProps = {
  page: number;
  perPage: number;
  total: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  page,
  perPage,
  total,
  isLoading = false,
  onPageChange,
}: PaginationProps) => {
  const maxPage = Math.ceil(total / perPage);
  const disablePrevious = page <= 1;
  const disableNext = maxPage <= page;

  const nextPage = useCallback(() => {
    onPageChange(page + 1);
  }, [onPageChange, page]);

  const previousPage = useCallback(() => {
    onPageChange(page - 1);
  }, [onPageChange, page]);

  const choices = useMemo(() => {
    const items = new Array(maxPage).fill(null);
    return items.map((_, index) => ({
      id: index + 1,
      name: index + 1,
    }));
  }, [maxPage]);

  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={previousPage}
          disabled={disablePrevious || isLoading}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <SelectInput value={page} choices={choices} onChange={onPageChange} />
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={disableNext || isLoading}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default Pagination;
