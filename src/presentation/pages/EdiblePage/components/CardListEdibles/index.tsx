import { Edible } from "@/domain/entities/Edible/Edible.model";
import { edibleUserCase } from "@/domain/entities/Edible/Edible.userCase";
import StockLevel from "@/presentation/components/atoms/StockLevel";
import Pagination from "@/presentation/components/molecules/Pagination";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/presentation/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";

type CardListEdiblesProps = {
  data?: Array<Edible>;
  total?: number;
  page: number;
  perPage: number;
  isLoading: boolean;
  onChangePage: (page: number) => void;
};

const CardListEdibles = ({
  data,
  total,
  page,
  perPage,
  isLoading,
  onChangePage,
}: CardListEdiblesProps) => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-right">Mínimo</TableHead>
              <TableHead className="text-right">Óptimo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((edible) => (
              <TableRow key={edible.id}>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <StockLevel level={edibleUserCase.getStockLevel(edible)} />
                    <span className="font-semibold text-base">
                      {edible.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right" width="80px">
                  {edible.stock}
                </TableCell>
                <TableCell className="text-right" width="80px">
                  {edible.minStock}
                </TableCell>
                <TableCell className="text-right" width="80px">
                  {edible.optimalStock}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-end">
        {total && (
          <Pagination
            page={page}
            perPage={perPage}
            total={total}
            isLoading={isLoading}
            onPageChange={onChangePage}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CardListEdibles;
