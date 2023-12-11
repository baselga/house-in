import { edibleUseCases } from "@/modules/edibles/application/useCases/EdibleUseCases";
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
import useEdiblePageContext from "../../context";
import DeleteAction from "./components/DeleteAction";
import DownStockAction from "./components/DownStockAction";
import UpStockAction from "./components/UpStockAction";

const CardListEdibles = () => {
  const { page, perPage, edibleList, onPageChange } =
    useEdiblePageContext();
  const { data: edibles, isLoading } = edibleList;

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
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {edibles?.data?.map((edible) => (
              <TableRow key={edible.id}>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <StockLevel level={edibleUseCases.getStockLevel(edible)} />
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
                <TableCell width="100px">
                  <div className="flex justify-end gap-1">
                    <UpStockAction edible={edible} />
                    <DownStockAction edible={edible} />
                    <DeleteAction edible={edible} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-end">
        {edibles?.total && (
          <Pagination
            page={page}
            perPage={perPage}
            total={edibles.total}
            isLoading={isLoading}
            onPageChange={onPageChange}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CardListEdibles;
