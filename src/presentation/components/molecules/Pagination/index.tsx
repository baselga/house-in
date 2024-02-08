import { useCallback, useMemo } from "react";
import ButtonIcon from "../../atoms/ButtonIcon";
import Select from "../../atoms/Select";

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
        <ButtonIcon
          icon="ChevronLeft"
          variant="outline"
          onClick={previousPage}
          disabled={disablePrevious || isLoading}
        />
        <Select value={page} choices={choices} onChange={onPageChange} />
        <ButtonIcon
          icon="ChevronRight"
          variant="outline"
          onClick={nextPage}
          disabled={disableNext || isLoading}
        />
      </div>
    </>
  );
};

export default Pagination;
