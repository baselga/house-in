import { Link } from "react-router-dom";

import { Button } from "@/presentation/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import useCardEdibleHomeContext from "./context";

const CardEdiblesHomeView = () => {
  const { data: edible } = useCardEdibleHomeContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Despensa</CardTitle>
        <CardDescription>Que me quedo sin comer!!!</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {edible?.data?.map((edible) => (
              <TableRow key={edible.id}>
                <TableCell>{edible.name}</TableCell>
                <TableCell>{edible.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link to="/despensa">
          <Button variant="default">Ver todo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardEdiblesHomeView;
