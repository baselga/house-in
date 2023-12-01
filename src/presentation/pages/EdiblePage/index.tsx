import { edibleUserCase } from "@/domain/entities/Edible/Edible.userCase";
import StockLevel from "@/presentation/components/atoms/StockLevel";
import LayoutPage from "@/presentation/components/templates/LayoutPage";
import { Card, CardContent } from "@/presentation/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import useGetEdibleQuery from "@/presentation/queryHooks/useGetEdibleQuery";

const EdiblePage = () => {
  const { data: edibles } = useGetEdibleQuery();

  return (
    <LayoutPage>
      <h1 className="text-3xl font-bold pb-6">Despensa</h1>
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
              {edibles?.map((edible) => (
                <TableRow key={edible.id}>                  
                  <TableCell>                    
                    <div className="flex gap-2 items-center">
                      <StockLevel level={edibleUserCase.getStockLevel(edible)} />
                      <span className="font-semibold text-base">{edible.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right" width="80px">{edible.stock}</TableCell>
                  <TableCell className="text-right" width="80px">{edible.minStock}</TableCell>
                  <TableCell className="text-right" width="80px">{edible.optimalStock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </LayoutPage>
  );
};

export default EdiblePage;
