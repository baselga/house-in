import LayoutPage from "@/infrastructure/components/templates/LayoutPage";
import { Card, CardContent } from "@/infrastructure/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/infrastructure/components/ui/table";
import useGetEdibleQuery from "@/infrastructure/queryHooks/useGetEdibleQuery";

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
                <TableHead>Stock</TableHead>
                <TableHead>Mínimo</TableHead>
                <TableHead>Óptimo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {edibles?.map((edible) => (
                <TableRow key={edible.id}>
                  <TableCell>{edible.name}</TableCell>
                  <TableCell>{edible.stock}</TableCell>
                  <TableCell>{edible.minStock}</TableCell>
                  <TableCell>{edible.optimalStock}</TableCell>
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
